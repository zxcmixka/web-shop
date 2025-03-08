import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Загружаем переменные окружения
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
const SECRET_KEY = process.env.JWT_SECRET || "supersecretkey";

// Подключение к MongoDB Atlas
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB подключена"))
    .catch(err => console.error("Ошибка подключения к MongoDB:", err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// 📌 Модель пользователя
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

// 📌 Регистрация пользователя
app.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Проверка, существует ли уже email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "❌ Пользователь уже существует" });
        }

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создаем пользователя
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "✅ Регистрация успешна" });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error });
    }
});

// 📌 Вход пользователя
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Проверяем пользователя
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "❌ Пользователь не найден" });
        }

        // Проверяем пароль
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "❌ Неверный пароль" });
        }

        // Создаем JWT токен
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "1h" });

        res.json({ message: "✅ Вход успешен", token });
    } catch (error) {
        res.status(500).json({ message: "Ошибка сервера", error });
    }
});

// 📌 Защищенный маршрут (получение данных о пользователе)
app.get("/user", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ message: "❌ Нет токена" });

        // Проверяем токен
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) return res.status(404).json({ message: "❌ Пользователь не найден" });

        res.json(user);
    } catch (error) {
        res.status(401).json({ message: "❌ Ошибка аутентификации" });
    }
}