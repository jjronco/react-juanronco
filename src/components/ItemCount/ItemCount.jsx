import React from 'react';

const ItemCount = ({ stock, contador, setContador }) => {
  const increase = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrease = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={decrease}>-</button>
      <span>{contador}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default ItemCount;
