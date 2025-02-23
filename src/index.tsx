import React from 'react';
import ReactDOM from 'react-dom/client';
import {Main} from "./mainPage/mainPage.tsx"
import { Cart } from './shoppingCartPage/shoppingCartPage.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
  <Main/>
  <Cart/>
  </div>
);
