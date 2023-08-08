
const ItemListContainer = ({greeting}) => {
    return (
        <div className='container' style={{textAlign:"center", width:"1296px", height:"500px"}}>
            <p style={{textAlign: "center", lineHeight: "250px"}}>{greeting}</p>
        </div>
    )
}

export default ItemListContainer