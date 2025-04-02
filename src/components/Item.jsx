import { Link } from "react-router-dom";

const Item = ({ id, nombre, categoria, precio }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">Categoría: {categoria}</p>
          <p className="card-text">Precio: ${precio}</p>
          <Link to={`/item/${id}`} className="btn btn-primary">Ver detalles</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
