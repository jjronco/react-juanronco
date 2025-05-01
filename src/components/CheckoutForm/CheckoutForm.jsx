import { useState } from "react";
import { useAppContext } from "../../context/context";
import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './CheckoutForm.css';

function CheckoutForm() {
  const { carrito, setCarrito } = useAppContext();
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !direccion || !email || !telefono) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const orden = {
      cliente: { nombre, direccion, email, telefono },
      productos: carrito,
      fecha: new Date(),
      total: carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0),
    };

    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "ordenes"), orden);
      console.log("Orden guardada con ID:", docRef.id);

      setCarrito([]);

      navigate(`/confirmacion/${docRef.id}`);
    } catch (error) {
      console.error("Error al guardar la orden: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-form-container">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
