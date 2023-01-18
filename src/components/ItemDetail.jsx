import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="my-5 py-5 text-center">
            <img className="img-fluid rounded-3" src={item.imagen} alt={item.nombre} />
            <h2 className="pt-5 text-uppercase fw-bold">{item.nombre}</h2>
            <p className="py-3">{item.descripcion}</p>
            <p className="py-4 fw-bold"><b>${item.precio}</b></p>
            <div>
                <ItemCount stockItems={item.stock} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;