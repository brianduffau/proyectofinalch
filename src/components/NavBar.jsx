import CartWidget from './CartWidget.jsx';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Zelda Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Armas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Escudos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Arcos y flechas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Items</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    )
  }

  export default NavBar