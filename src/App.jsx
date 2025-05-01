import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from './components/Navbar/Navbar';
import ItemDetail from './components/ItemDetail/ItemDetail';
import { ContextProvider } from './context/context';
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart/Cart';
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import ConfirmationPage from "./components/ConfirmationPage/ConfirmationPage";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <ContextProvider>
      <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/confirmacion/:id" element={<ConfirmationPage />} />
          <Route path="*" element={<p>Página no encontrada.</p>} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
