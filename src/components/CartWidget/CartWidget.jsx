import React from 'react';
import { useAppContext } from '../../context/context';
import {FaShoppingCart} from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = () => {

  const { carrito } = useAppContext();

  return (
    <div className="d-flex align-items-center text-white ms-3">
      <FaShoppingCart />
      <p>{carrito.length}</p>
    </div>
  );
};

export default CartWidget;