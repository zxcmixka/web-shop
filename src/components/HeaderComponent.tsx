import React from "react";
import { Link } from "react-router-dom";
import cart from '../images/cart.png';
import logo from '../images/logo.png';
import styles from './HeaderComponentStyles.module.css';

export const HeaderComponent = () => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.link}>
                <Link to={"/"} className={styles.button}>
                <img className={styles.home} src={logo} alt="logo" /> <h1 className={styles.logotext}>mxk$hop</h1>
                </Link>
                <Link to={"/ShoppingCartPage"} className={styles.button}>
                    <img className={styles.cart} src={cart} alt="Cart" />
                </Link>
            </div>
        </div>
    );
};
