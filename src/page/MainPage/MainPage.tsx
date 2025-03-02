import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./MainPage.module.css";

interface Product {
  id: number;
  img: string;
  name: string;
  price: string;
}

const MainPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Получаем товары с сервера
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Ошибка загрузки товаров:", error));
  }, []);

  return (
    <div className={styles.content}>
      {products.map(product => (
        <div key={product.id} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <button>
            <h1>{product.price} ₽</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;