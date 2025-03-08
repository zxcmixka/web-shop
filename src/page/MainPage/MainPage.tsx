import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./MainPage.module.css";

interface Product {
  id: number;
  img: string;
  name: string;
  price: string | number;
}

const MainPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  // Получаем товары с сервера
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => setProducts(response.data))
      .catch(error => console.error("Ошибка загрузки товаров:", error));
  }, []);

  // Функция для перехода на страницу товара
  const goToProductPage = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={styles.content}>
      {products.map(product => (
        <div key={product.id} onClick={() => goToProductPage(product.id)} className={styles.product}>
          <img src={product.img} alt={product.name} />
          <h2>{product.name}</h2>
          <button>
            <h1>{Number(product.price).toLocaleString("ru-RU")} ₽</h1>
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainPage;
