import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Loading from "./Loading";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    /*
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? Productos.filter(item => item.categoria === id): Productos);
            }, 2000)
        })
        promesa.then((data) => {
            setItems(data);
        })
    }, [id])*/

    /*
    useEffect (() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        Productos.forEach((item) => {
            addDoc(itemsCollection, item);
        });
    }, []);*/

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection (db, "items")
        const q = (id ? query(itemsCollection, where("categoria","==",id)) : itemsCollection)
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
            setLoading(false);
        });
    }, [id])

    return (
        <div>
            {loading ? <Loading /> : <ItemList items={items} />}        
        </div>
    )
}

export default ItemListContainer;