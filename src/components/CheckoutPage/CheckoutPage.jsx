import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const { carrito } = useAppContext();

  if (carrito.length === 0) {
    return (
      <div>
        <h2>No tienes productos en el carrito</h2>
        <Link to="/productos">Ver productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Resumen de tu compra</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} x {producto.cantidad} - ${producto.precio * producto.cantidad}
          </li>
        ))}
      </ul>
      <h3>Total: ${carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0)}</h3>
      <CheckoutForm />
    </div>
  );
}

export default CheckoutPage;
