import CartWidget from './CartWidget.jsx';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <Link className="nav-link" to="/">The Zelda Shop</Link>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/armas">Armas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/escudos">Escudos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/arcosyflechas">Arcos y Flechas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/objetos">Objetos</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <CartWidget />
                    </ul>
                </div>
                
            </div>
        </nav>
    )
  }

  export default NavBar