import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let products = []; // Хранилище товаров

// POST-запрос для добавления товара
app.post("/api/products", (req, res) => {
    const { img, name, price } = req.body;
    if (!img || !name || !price) {
        return res.status(400).json({ message: "Все поля обязательны" });
    }
    const newProduct = { id: Date.now(), img, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// GET-запрос для получения товаров
app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
