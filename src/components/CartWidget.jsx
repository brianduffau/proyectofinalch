// import ReactDOM from 'react-dom'
// import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faLeftLong } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
    return (
        <li className="nav-item" style={{fontSize:"20px"}}>
            <a className="nav-link"><FontAwesomeIcon icon={faCartShopping} style={{marginRight:"10px"}}/>
                <span className='badge bg-secondary'>0</span>
            </a>
        </li>
    )
}

export default CartWidget