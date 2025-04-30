import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { db } from '../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import Loader from '../Loader/Loader';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { toast } from 'react-toastify';

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState([]);
  
  const { categoria } = useParams();
  const productosCollection = collection(db, "productos");

  useEffect(() => {
    getDocs(productosCollection)
      .then(snapshot => {
        const arrayDeProductos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTodosLosProductos(arrayDeProductos);
        toast("Productos cargados correctamente");
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        toast.error("Error al cargar los productos");
        setLoading(false);
      });
  }, [categoria]);

  return (
    loading ?
      <Loader />
      :
      <div>
        <div className="container-productos">
          {
            categoria ?
              todosLosProductos.filter(el => el.categoria === categoria).map(el => (
                <Item key={el.id} producto={el} />
              ))
              :
              todosLosProductos.map(el => (
                <Item key={el.id} producto={el} />
              ))
          }
        </div>
      </div>
  );
}

export default ItemListContainer;
