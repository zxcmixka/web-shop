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

