import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                    <h1>{item.nombre}</h1>
                    <p>{item.descripcion}</p>
                    <p><b>${item.precio}</b></p>
                    
                </div> 
            </div>
            <div>
                <ItemCount stockItems={item.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;