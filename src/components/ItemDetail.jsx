import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product, onAddToCart }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} onAdd={onAddToCart} />
    </div>
  );
};

export default ItemDetail;
