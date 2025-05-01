import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import "./ConfirmationPage.css";

function ConfirmationPage() {
  const { id } = useParams();
  const [orden, setOrden] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrden = async () => {
      try {
        const docRef = doc(db, "ordenes", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setOrden(docSnap.data());
        } else {
          setError("Orden no encontrada");
        }
      } catch (error) {
        console.error("Error al obtener la orden: ", error);
        setError("Hubo un problema al obtener la orden. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrden();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Cargando tu confirmación...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="confirmation-container">
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu orden ha sido procesada con éxito.</p>
      <h3>Detalles de la orden:</h3>
      <ul>
        {orden.productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} x {producto.cantidad} - ${producto.precio * producto.cantidad}
          </li>
        ))}
      </ul>
      <h3>Total: ${orden.total}</h3>
    </div>
  );
}

export default ConfirmationPage;
