import { NavLink, Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/">
                    <img src="https://images.vexels.com/media/users/3/153808/isolated/preview/4876c523fb2612dceba4be0c7031461c-icono-de-trazo-frontal-de-silla-de-oficina.png" alt="" />
                    <span className="brand-name">La casa de la oficina</span>
                </Link>

                <div className="nav-links">
                    <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Inicio</NavLink>
                    <NavLink to="/nosotros" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Nosotros</NavLink>
                    <NavLink to="/productos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Productos</NavLink>
                    <NavLink to="/contacto" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contacto</NavLink>
                </div>
            </div>
        </nav>
    )
}
