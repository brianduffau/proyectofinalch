import propTypes from "prop-types"

const ItemDetail = ({item}) => {

    if(!item){
        return null
    }

    return (
        <div className='container' style={{textAlign:"center", width:"1296px", height:"500px"}}>
            <div class="col d-flex justify-content-center">
            <div className="card" style={{width:"18rem", marginTop:"1rem" }} key={item.id}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.category}</p>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                </div>    
            </div>
            </div>   
        </div>
    )
}

ItemDetail.propTypes = {
    item: propTypes.object,
  }

export default ItemDetail