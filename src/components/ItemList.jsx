import propTypes from "prop-types";
import { Link } from "react-router-dom";

// COMPONENTE DE PRESENTACION

// instalar npm i prop-types para manejear props a nivel del componente

// se puede hacer la logica de presentacion con un componente card si queremos

const ItemList = ({ items }) => {
    return (
        <div>
            <h1 style={{ marginTop:"1rem" }}>Item List</h1>

            <div className="container">

                <div className="row">

                    {items.map((item) => (
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card" style={{width:"18rem", marginTop:"1rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.category}</p>
                                <p className="card-text">{item.description}</p>
                                <p className="card-text">${item.price}</p>
                                <Link className="btn btn-primary" to={`/item/${item.id}`}>Ver detalle</Link>
                            </div>    
                        </div>
                    </div>
                    ))}
                </div>

            </div>
        </div>
    )
  }

// DEFINIMOS EL TIPO DE PROP A UTILIZAR

  ItemList.propTypes = {
    items: propTypes.array.isRequired,
  }

  export default ItemList