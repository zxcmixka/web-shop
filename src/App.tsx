import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {HeaderComponent} from './components/HeaderComponent';
import {MainPage} from './page/MainPage/MainPage';
import {ShoppingCartPage} from './page/ShoppingCartPage/ShoppingCartPage';

function App() {
    return (
      <div>
        <HeaderComponent />
        
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/ShoppingCartPage' element={<ShoppingCartPage />} />
        </Routes>
      </div>
    );
}

export default App;