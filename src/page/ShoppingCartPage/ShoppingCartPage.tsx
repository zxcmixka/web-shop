import React from 'react';
import styles from './ShoppingCartPage.module.css'
import axios from "axios";

export const loginUser = async () => {
  try {
      const response = await axios.post("http://localhost:5000/login", {
          email: "test@example.com",
          password: "password123",
      });
      console.log("Токен:", response.data.token);
  } catch (error) {
      console.error("Ошибка входа:",);
  }
};
loginUser();


export const ShoppingCartPage = () => {
  return (
    <div>
      <h1 className={styles.lol}>qweqwewqewq</h1>
    </div>
  );
}
