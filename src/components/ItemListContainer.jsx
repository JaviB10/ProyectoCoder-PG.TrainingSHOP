import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Productos from "./json/Productos.json";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Productos.filter(item => item.categoria === id): Productos);
            }, 2000)
        })
        promesa.then((data) => {
            setItems(data);
        })
    }, [id])


    return (
        <ItemList items={items} />
    )
}

export default ItemListContainer;