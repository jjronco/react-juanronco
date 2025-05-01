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
    <div className="d-flex align-items-center justify-content-center">
      <button 
        className="btn btn-outline-secondary mx-2" 
        onClick={decrease}
      >
        -
      </button>

      <span className="mx-2">{contador}</span>

      <button 
        className="btn btn-outline-secondary mx-2" 
        onClick={increase}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
