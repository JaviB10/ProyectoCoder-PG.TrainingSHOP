import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore"
import { CartContext } from "./context/CartContext";

const Ending = () => {
    const {clear} = useContext(CartContext);
    const {id} =useParams();
    const [orden, setOrden] = useState({});  
    const [nombre, setNombre] = useState("");
    const [items, setItems] = useState([]);
    useEffect(() => {
        clear();
    },[])
    
    
    useEffect(()=>{
        const db = getFirestore()
        const documento = doc(db, "orders", id)
        getDoc(documento).then((snapshot)=>{
            if (snapshot.exists()) {
                setOrden({id:snapshot.id, ...snapshot.data()});
                setNombre(snapshot.data().buyer.nombre);
                setItems(snapshot.data().items)
            } else{
                console.warn("Error, no se encontro la orden!!!");
            }
        })
    },[id])
    
    return(
        <div className="container my-5 d-flex flex-column align-items-center">
            <div className="d-flex flex-column align-items-center p-4 bg-black text-light rounded-4 tickets">
                <h2 className="my-4 text-center"><b>felicidades por tu pedido</b></h2>
                <div className="d-flex flex-md-row flex-column align-items-center">
                    <img className="m-4" src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+orden.id} alt="codigo qr" width={200}/>
                    <div>
                        <h5>Codigo: {orden.id}</h5>
                        <h5>Nombre: {nombre}</h5>
                        <h5>Fecha: {orden.date}</h5>
                        <h5>Productos:</h5>
                        <div className="text-end">
                            {items.map(item=>(<h6 key={item.id}>{item.quantity} - {item.nombre} - ${item.precioTotal}</h6>))}
                        </div>
                        <h5 className="text-end"><b>Total: ${orden.total}</b></h5>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to={"/"} className="btn bgNegro fw-bold me-3">Volver al Inicio</Link>
                <button className="btn bgNegro fw-bold ms-3" onClick={()=>{window.print()}}>Imprimir</button>
            </div>
            
        </div>
    )


}

export default Ending;