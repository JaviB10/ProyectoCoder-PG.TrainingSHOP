import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)

    
    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (

        <div className="mt-5 pt-5 text-center">

            <img src={item.imagen} className="img-fluid rounded-3" alt={item.nombre} />
            <h1 className="pt-5 text-uppercase fw-bold">{item.nombre}</h1>
            <p className="pt-3">{item.descripcion}</p>
            <p className="pt-3 fw-bold"><b>${item.precio}</b></p>
            <div className="pt-5 pb-5 mb-5">

                <ItemCount stockItems={item.stock} onAdd={onAdd} />

            </div>
            
        </div>
    )
}

export default ItemDetail;