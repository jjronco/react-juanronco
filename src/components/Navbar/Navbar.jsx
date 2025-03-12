import './Navbar.css'

function Navbar() {
  return (
    <>
      <header>
        <nav className="nav-bar">
            <p>Logo</p>
          <ul className="nav-bar-items">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
          <p>Carrito (5)</p>
        </nav>
      </header>
    </>
  )
}

export default Navbar
