import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {getDoc, getFirestore, doc} from "firebase/firestore";
import Error404 from "./Error404";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const db = getFirestore();
        const producto = doc(db, "items", id)
        getDoc(producto).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                <Error404 />
            }
        })
    },[id])

    return (
        <div>
            {loading ? <Loading /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;