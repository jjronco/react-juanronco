import { useEffect, useState } from 'react';
import { fetchData } from '../../fetchData';
import { useParams } from 'react-router';
import Loader from '../Loader/Loader';
import Item from '../Item/Item';
import './ItemListContainer.css';
import { db } from '../../firebaseConfig';
import { collection, getDocs, } from 'firebase/firestore';
import { toast } from 'react-toastify';

function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [todosLosProductos, setTodosLosProductos] = useState(null);

  const { categoria } = useParams();

  const productosCollection = collection(db, "productos");

  useEffect(() => {

    getDocs(productosCollection).then(snapshot => {
      let arrayDeProductos = snapshot.docs.map(el => el.data());
      console.log(arrayDeProductos);

    })
      .catch(err => console.error(err));



    if (!todosLosProductos) {
      fetchData()
        .then(response => {
          setTodosLosProductos(response);
          toast("Productos cargados correctamente");
          setTimeout(() => {
            setLoading(false);
          }, 500);
        })
        .catch(err => console.error(err));
    };

  }, [categoria]);

  return (

    loading ?

      <Loader />

      :

      <div>
        <div className="container-productos">
          {
            categoria ?

              todosLosProductos.filter(el => el.categoria === categoria).map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })

              :
              todosLosProductos.map(el => {
                return (
                  <Item key={el.id} producto={el} />
                );
              })}
        </div>
        {/* <button onClick={() => crearOrden()} className="btn btn-primary">Cargar</button> */}
      </div>
  );
};

export default ItemListContainer;