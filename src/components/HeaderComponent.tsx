import React from "react";
import { Link } from "react-router-dom";
import cart from '../images/cart.png';

export const HeaderComponent = () => {
    return (
        <div className="headerContainer">
            <div className="">
                <Link to={"/"} className="button">Home</Link>
                <Link to={"/ShoppingCartPage"} className="button">
                    <img src={cart} alt="Cart" />
                </Link>
            </div>
        </div>
    );
};
