import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)

    
    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (

        <div className="disposicionItemDetail text-center">

            <img src={item.imagen} className="img-fluid" alt={item.nombre} />
            <h1 className="pt-5">{item.nombre}</h1>
            <p className="pt-3">{item.descripcion}</p>
            <p className="pt-3"><b>${item.precio}</b></p>
            <div className="pt-5">

                <ItemCount stockItems={item.stock} onAdd={onAdd} />

            </div>
            
        </div>
    )
}

export default ItemDetail;