import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppContext } from '../../context/context';
import './CartWidget.css';

const CartWidget = () => {
  const { carrito } = useAppContext();

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <p>{carrito.reduce((acc, item) => acc + item.cantidad, 0)}</p>
    </Link>
  );
};

export default CartWidget;
