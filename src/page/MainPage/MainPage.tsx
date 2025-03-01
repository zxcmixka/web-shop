import React from 'react';
import styles from './MainPage.module.css'
import test from '../images/cart.png';

export const MainPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.product}>
        <img src={"test"} alt="123" />
        <h2>sdfksdfdslfsdmfsdlf</h2>
        <button ><h1>1200</h1></button>
      </div>
      <div className={styles.product}>
        <img src="test" alt="123" />
        <h2>sdfksdfdslfsdmfsdlf</h2>
        <button ><h1>1200</h1></button>
      </div>
      <div className={styles.product}>
        <img src="" alt="123" />
        <h2>sdfksdfdslfsdmfsdlf</h2>
        <button ><h1>1200</h1></button>
      </div>
      <div className={styles.product}>
        <img src="" alt="123" />
        <h2>sdfksdfdslfsdmfsdlf</h2>
        <button ><h1>1200</h1></button>
      </div>
        
    </div>
  );
}
