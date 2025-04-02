import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const mockProduct = {
        id,
        name: "Producto de prueba",
        description: "Descripción del producto",
        price: 1000,
      };
      setProduct(mockProduct);
    }, 1000);
  }, [id]);

  const handleAddToCart = (quantity) => {
    console.log(`Agregaste ${quantity} unidades de ${product.name} al carrito.`);
  };

  return (
    <>
      {product ? (
        <ItemDetail product={product} onAddToCart={handleAddToCart} />
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default ItemDetailContainer;
