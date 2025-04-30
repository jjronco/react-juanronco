import React, { useState } from "react";

function ItemCount({ stock, contador, setContador }) {

  function modificarContador(operacion) {
      if (operacion === "+") {
          if (contador < stock) {
              setContador(contador + 1);
          };
      } else {
          if (contador > 1) {
              setContador(contador - 1);
          };
      };
  };

  return (
    <div>
      <button onClick={decrease} disabled={count === 1}>-</button>
      <span>{count}</span>
      <button onClick={increase} disabled={count === stock}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;