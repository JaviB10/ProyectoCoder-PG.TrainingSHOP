import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (

        <div className="disposicionItemDetail text-center">

            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
            <h1 className="pt-5">{item.nombre}</h1>
            <p className="pt-3">{item.descripcion}</p>
            <p className="pt-3"><b>${item.precio}</b></p>
            <div className="pt-5">

                <ItemCount stockItems={item.stock} />

            </div>
            
        </div>
    )
}

export default ItemDetail;