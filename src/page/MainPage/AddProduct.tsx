import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "./AddProduct.module.css";

const AddProduct: React.FC = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isValidPrice, setIsValidPrice] = useState(false); // Проверка корректности цены
  const priceInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputElement = priceInputRef.current;
    if (!inputElement) return;

    const formatPrice = (event: Event) => {
      const target = event.target as HTMLInputElement;
      const num = target.value.replace(/\s/g, "");

      if (/^\d+$/.test(num)) {
        target.value = parseInt(num, 10).toLocaleString("ru-RU");
        setPrice(target.value);
        setIsValidPrice(true);
      } else {
        target.value = "";
        setPrice("");
        setIsValidPrice(false);
      }
    };

    inputElement.addEventListener("input", formatPrice);
    return () => inputElement.removeEventListener("input", formatPrice);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/products", { img, name, price: price.replace(/\s/g, "") });
      alert("Товар добавлен!");
      setImg("");
      setName("");
      setPrice("");
      setIsValidPrice(false);
    } catch (error) {
      console.error("Ошибка добавления товара:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Ссылка на картинку"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        ref={priceInputRef}
        type="text"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit" disabled={!isValidPrice}>Добавить</button>
    </form>
  );
};

export default AddProduct;
