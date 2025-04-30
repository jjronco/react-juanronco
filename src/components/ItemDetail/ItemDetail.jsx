import React from "react";
import { Link, useParams } from 'react-router';
import { useAppContext } from '../../context/context';
import { fetchData } from '../../fetchData';
import ItemCount from '../ItemCount/ItemCount';
import Loader from '../Loader/Loader';



function ItemDetail() {

  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  const { agregarAlCarrito } = useAppContext();

  useEffect(() => {
      fetchData()
          .then(response => {
              const productoAMostrar = response.find(el => el.id === parseInt(id));
              setProducto(productoAMostrar);
              setTimeout(() => {
                  setLoading(false);
              }, 500);
          })
          .catch(err => console.error(err));
  }, []);

  return (
      loading ?
          <Loader />

          :

          <div className="card p-4">
              {
                  producto ?
                      <>
                          <h3 className="card-header">{producto.nombre}</h3>
                          <div className="card-body">
                              <h5>Precio: <b>${producto.precio}</b></h5>
                              <h5>Categoria: <b>{producto.categoria.toUpperCase()}</b></h5>
                              <p><b>{producto.descripcion}</b></p>
                              <p>Quedan <b>{producto.stock}</b> disponibles</p>

                              <ItemCount stock={producto.stock} contador={contador} setContador={setContador} />

                              <button className="btn btn-secondary my-2" onClick={() => agregarAlCarrito(producto, contador)}>Agregar al carrito</button>
                              <Link to="/">
                                  <button className="btn btn-secondary my-2">Volver al inicio</button>
                              </Link>
                          </div>
                      </>

                      :

                      <p>Producto no encontrado con el id {id}</p>
              }
          </div>

  );
};

export default ItemDetail;