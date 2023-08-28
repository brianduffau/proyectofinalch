
// array de productos

const products = [
    {id: "1", name: "producto1", category:"armas", description: "descripcion de objeto arma", price: "12.00"},
    {id: "2", name: "producto2", category:"armas", description: "descripcion de objeto arma", price: "12.00"},
    {id: "3", name: "producto3", category:"escudos", description: "descripcion de objeto escudo", price: "12.00"},
    {id: "4", name: "producto4", category:"arcosyflechas", description: "descripcion de objeto arco y flecha", price: "12.00"},
    {id: "5", name: "producto5", category:"objetos", description: "descripcion de objeto", price: "12.00"},
    {id: "6", name: "producto6", category:"objetos", description: "descripcion de objeto", price: "12.00"}
]

// retornar producto por id

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find( p => p.id == id)
            if(product){
                resolve(product);
            } else {
                reject("no existe el producto");
            }
        }, 1000)
    })
}

// retornar productos por categoria

export const getProducts = (category) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const productsFiltered = category 
            ? products.filter((p) => p.category == category) 
            : products;
            resolve(productsFiltered)
        }, 1000)
    })
}

