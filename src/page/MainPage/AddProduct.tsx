import React, { useState } from "react";
import axios from "axios";
import styles from "./AddProduct.module.css";

const AddProduct: React.FC = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", { img, name, price });
      alert("Товар добавлен!");
    } catch (error) {
      console.error("Ошибка добавления товара:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type="text" placeholder="Ссылка на картинку" value={img} onChange={(e) => setImg(e.target.value)} required />
      <input type="text" placeholder="Название" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Цена" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddProduct;

