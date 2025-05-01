import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from '../../context/context';
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";


function Item({ producto }) {
  const { id, nombre, precio, stock } = producto;
  const { agregarAlCarrito } = useAppContext();
  const [contador, setContador] = useState(1);

  return (
    <div className="col-md-4 mb-4">
      <div className="card item-card">
        <div className="card-body">
          <h3 className="card-header">{nombre}</h3>
          <h5 className="card-body">Precio: ${precio}</h5>
          <p>Quedan {stock} disponibles</p>


          <ItemCount stock={stock} contador={contador} setContador={setContador} />

          <button 
            className="btn btn-secondary my-2 boton" 
            onClick={() => agregarAlCarrito(producto, contador)} >
            Agregar al carrito
          </button>

          <Link to={`/detalle/${id}`}>
            <button className="btn btn-secondary my-2 boton">Ver detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
