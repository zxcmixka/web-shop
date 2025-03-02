import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { ShoppingCartPage } from "./page/ShoppingCartPage/ShoppingCartPage";
import MainPage from "../src/page/MainPage/MainPage";
import AddProduct from "../src/page/MainPage/AddProduct";

function App() {
  return (
    <div>
      <HeaderComponent />
 

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Create" element={<AddProduct />}/>
        <Route path="/ShoppingCartPage" element={<ShoppingCartPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
