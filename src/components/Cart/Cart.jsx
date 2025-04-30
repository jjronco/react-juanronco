import React from 'react';
import { useAppContext } from '../../context/context';
import './Cart.css';

const Cart = () => {
  const { carrito, eliminarDelCarrito } = useAppContext();

  const totalPrecio = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-header">Tu Carrito</h2>

      {carrito.length > 0 ? (
        <>
          <div className="cart-items">
            {carrito.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.nombre}</div>
                  <div className="cart-item-price">${item.precio}</div>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="total-price">Total: ${totalPrecio}</div>
            <button className="checkout-button">Proceder al pago</button>
          </div>
        </>
      ) : (
        <p>El carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
