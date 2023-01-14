import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";
import ItemList from "./ItemList";
import Loading from "./Loading";
import Publicidad from "./Publicidad";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

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
            <Publicidad />   
        </div>
    )
}

export default ItemListContainer;