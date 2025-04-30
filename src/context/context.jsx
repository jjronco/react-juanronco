import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    function agregarAlCarrito(prod, cantidad) {
        const nuevoProducto = {
            ...prod,
            cantidad,
        };

        if (carrito.some(el => el.id === prod.id)) {
            const newCarrito = carrito.map(element => {
                if (element.id === prod.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + cantidad
                    };
                } else {
                    return element;
                };
            });
            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, nuevoProducto]);
        };

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
