import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/products";
import ItemList from "./ItemList"

// COMPONENTE CONTENEDOR

// HACEMOS LA LLAMADA A LOS DATOS ACA Y SE LOS PASAMOS A ITEMLIST

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        // LLAMADA ASINCRONICA
        getProducts(categoryId).then(response => {
            // console.log(response)
            setItems(response);
        })
    }, [categoryId]);
    
    return ( <ItemList items={items} /> )

}

export default ItemListContainer
