import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16">
        {/* Logo y nombre */}
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <img
            src="https://images.vexels.com/media/users/3/153808/isolated/preview/4876c523fb2612dceba4be0c7031461c-icono-de-trazo-frontal-de-silla-de-oficina.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-lg tracking-tight">
            La casa de la oficina
          </span>
        </Link>

        {/* Botón hamburguesa (visible solo en móviles) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Enlaces (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>

      {/* Menú móvil (responsive) */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-3 py-4 animate-slideDown">
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Inicio
          </NavLink>
          <NavLink
            to="/nosotros"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to="/productos"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/contacto"
            onClick={closeMenu}
            className={({ isActive }) =>
              `hover:text-yellow-400 transition-colors ${
                isActive ? "text-yellow-400 font-medium" : ""
              }`
            }
          >
            Contacto
          </NavLink>
        </div>
      )}
    </nav>
  );
}
