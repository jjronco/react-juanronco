import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Item from "./Item"; 

const productos = [
  { id: "1", nombre: "Producto 1", categoria: "categoria1", precio: 1000 },
  { id: "2", nombre: "Producto 2", categoria: "categoria2", precio: 2000 },
  { id: "3", nombre: "Producto 3", categoria: "categoria1", precio: 1500 },
];

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          categoriaId
            ? productos.filter((prod) => prod.categoria === categoriaId)
            : productos
        );
      }, 500)
    ).then(setItems);
  }, [categoriaId]);
  
  return (
    <div className="container mt-3">
      <h2>{categoriaId ? `Categoría: ${categoriaId}` : "Todos los productos"}</h2>
      <div className="row">
        {items.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
