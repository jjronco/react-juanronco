import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        if (cantidad <= 0 || isNaN(cantidad)) {
            toast.error("La cantidad debe ser un número válido mayor a 0");
            return;
        }

        if (cantidad > prod.stock) {
            toast.error(`No puedes agregar más de ${prod.stock} unidades de ${prod.nombre}`);
            return;
        }

        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        if (carrito.some(el => el.id === prod.id)) {
            const newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    const nuevaCantidad = element.cantidad + cantidad;
                    if (nuevaCantidad <= prod.stock) {
                        return {
                            ...element,
                            cantidad: nuevaCantidad,
                        };
                    } else {
                        toast.error(`No puedes agregar más de ${prod.stock} unidades de ${prod.nombre}`);
                        return element;
                    }
                } else {
                    return element;
                }
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        }

        toast("Producto agregado correctamente");
    };

    function eliminarDelCarrito(id) {
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.id !== id));
        toast("Producto eliminado del carrito");
    };

    return (
        <AppContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito }}>
            {props.children}
        </AppContext.Provider>
    );
};
