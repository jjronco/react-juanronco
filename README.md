# Trabajo Final - Juan Ronco
## Proyecto de Carrito de Compras con React

Este proyecto es una aplicación de carrito de compras creada con React y Firebase. Permite a los usuarios agregar productos al carrito, eliminar productos, y procesar la compra a través de un formulario. Además, se utiliza Firebase para guardar y recuperar las órdenes de compra.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Firebase**: Plataforma que proporciona herramientas como Firestore para almacenamiento de datos en tiempo real y autenticación.
- **React Context API**: Para el manejo global del estado del carrito de compras.
- **React Router**: Para la navegación entre las diferentes páginas de la aplicación.
- **React Toastify**: Para mostrar notificaciones emergentes al usuario.
- **Vite**: Herramienta de construcción y desarrollo de aplicaciones front-end.

## Estructura del Proyecto

- `src/`
  - `components/`: Contiene los componentes principales de la aplicación.
    - `CheckoutForm/`: Formulario para procesar la compra.
    - `CheckoutPage/`: Página que muestra el resumen del carrito y el formulario de compra.
    - `ConfirmationPage/`: Página que muestra la confirmación de la compra y detalles de la orden.
  - `context/`: Contiene el contexto de la aplicación, donde se maneja el carrito de compras.
  - `firebaseConfig.js`: Configuración de Firebase.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de la aplicación.

## Funcionalidades

### 1. **Carrito de Compras**
   Los usuarios pueden agregar productos al carrito especificando la cantidad. El carrito se mantiene en un estado global utilizando la **Context API** de React, y el estado se comparte entre las diferentes páginas de la aplicación.

   - **Agregar productos**: Los productos pueden agregarse con una cantidad específica. Se verifica que la cantidad no exceda el stock disponible.
   - **Eliminar productos**: Los usuarios pueden eliminar productos del carrito en cualquier momento.

### 2. **Formulario de Compra (CheckoutForm)**
   Una vez que los usuarios revisan su carrito, pueden completar un formulario para realizar la compra. Este formulario captura datos como nombre, correo y dirección del comprador.

   Al completar el formulario, la información se guarda en Firebase Firestore, y se crea un identificador único para la orden.

### 3. **Página de Confirmación**
   Después de procesar la compra, los usuarios son redirigidos a una página de confirmación que muestra el detalle de la orden (productos comprados, cantidades, total de la compra) y un mensaje de agradecimiento.


## Links
 - Repositorio
https://github.com/jjronco/react-juanronco

 - Deploy
https://magical-lebkuchen-3556cc.netlify.app/
