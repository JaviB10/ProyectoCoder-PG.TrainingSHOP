import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getDoc, getFirestore, doc} from "firebase/firestore";
import Error404 from "./Error404";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    /*
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Productos.find(item => item.id === parseInt(id)));
            }, 2000)
        })

        promesa.then((data) => {
            setItem(data);
        })
    }, [id])*/

    useEffect (() => {
        const db = getFirestore();
        const producto = doc(db, "items", id)
        getDoc(producto).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()})
            } else {
                <Error404 />
            }
        })
    },[id])


    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer;