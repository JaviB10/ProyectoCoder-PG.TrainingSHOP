import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Productos from "./json/Productos.json"


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Productos.find(item => item.id === parseInt(id)));
            }, 2000)
        })

        promesa.then((data) => {
            setItem(data);
        })
    }, [id])
    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;