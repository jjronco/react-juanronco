import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppContext } from '../../context/context';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import ItemCount from "../ItemCount/ItemCount";
import Loader from "../Loader/Loader";

function ItemDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState(null);
  const [contador, setContador] = useState(1);

  const { agregarAlCarrito } = useAppContext();

  const productosCollection = collection(db, "productos");

  useEffect(() => {
    const productoId = id;
    
    getDocs(productosCollection)
      .then(snapshot => {
        const productoAMostrar = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })).find(producto => producto.id === productoId);

        if (productoAMostrar) {
          setProducto(productoAMostrar);
        } else {
          console.error("Producto no encontrado con el ID", productoId);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error al obtener producto", err);
        setLoading(false);
      });
  }, [id]);

  return (
    loading ? 
      <Loader /> : 
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
              </div>
            </>
            :
            <p>Producto no encontrado con el ID {id}</p>
        }
      </div>
  );
}

export default ItemDetail;
