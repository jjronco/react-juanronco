import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

function ConfirmationPage() {
  const { id } = useParams();
  const [orden, setOrden] = useState(null);

  useEffect(() => {
    const fetchOrden = async () => {
      try {
        const docRef = doc(db, "ordenes", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOrden(docSnap.data());
        } else {
          console.log("Orden no encontrada");
        }
      } catch (error) {
        console.error("Error al obtener la orden: ", error);
      }
    };

    fetchOrden();
  }, [id]);

  if (!orden) {
    return <h2>Cargando tu confirmación...</h2>;
  }

  return (
    <div>
      <h2>Gracias por tu compra!</h2>
      <p>Tu orden ha sido procesada con éxito.</p>
      <p>Detalles de la orden:</p>
      <ul>
        {orden.productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} x {producto.cantidad}
          </li>
        ))}
      </ul>
      <p>Total: ${orden.total}</p>
    </div>
  );
}

export default ConfirmationPage;
