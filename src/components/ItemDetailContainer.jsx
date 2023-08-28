import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../services/products"
import ItemDetail from "./ItemDetail"

// COMPONENTE CONTENEDOR

// Desde aca hacemos la llamada al item particular por id con la funcion correspondiente

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()
    
    useEffect(() => {
        getProduct(id)
        .then(response => {
            console.log(response)
            setItem(response)
        }).
        catch(error => {
            console.log(error)
            setItem(null)
        })
    }, [id])

    return (

        <ItemDetail item={item} />

/*         <div className='container' style={{textAlign:"center", width:"1296px", height:"500px"}}>
            <ItemDetail />
        </div> */
    )
}

export default ItemDetailContainer