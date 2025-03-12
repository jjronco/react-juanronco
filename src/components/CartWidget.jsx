import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center text-white ms-3">
      <FaShoppingCart />
      <span className="ms-2">0</span>
    </div>
  );
};

export default CartWidget;
