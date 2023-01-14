import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Checkout = () => {

    const {cart, sumTotal, clear} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("")

    const generarOrden = () => {
        const fecha= new Date();
        const order = {
            buyer: {nombre:nombre, apellido:apellido, email:email, telefono:telefono},
            items: cart.map(item => ({id:item.id, nombre:item.nombre, precio:item.precio, quantity:item.quantity, precioTotal:item.quantity * item.precio})),
            date: ` ${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()} `,
            total: sumTotal()
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });

    }


    return(
        <div className="container d-flex justify-content-center mt-5 mb-5">
            <div className="row d-flex justify-content-around flex-md-row flex-column-reverse backgroundForm">
                <div className="col-md-4">
                    <form>
                        <div className="form-floating mt-5 mb-4">
                            <input className="form-control" id="nombre" type="text" placeholder="Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input className="form-control" id="apellido" type="text" placeholder="Apellido" onInput={(e) => {setApellido(e.target.value)}}/>
                            <label htmlFor="apellido">Apellido</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input className="form-control" id="email" type="email" placeholder="name@example.com" onInput={(e) => {setEmail(e.target.value)}}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-5">
                            <input className="form-control" id="telefono" type="tel" placeholder="Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            <label htmlFor="telefono">Teléfono</label>
                        </div>
                        <button type="button" className="btn btn-primary btn-outline-light fw-bold mb-5" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-6 table-responsive">
                    <table className="table text-center text-light mt-5 mb-2">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={100} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr className="text-center fw-bold">
                                <td colSpan={2}>&nbsp;</td>
                                <td><b>TOTAL</b></td>
                                <td><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col">
                    {orderId ? <Navigate to={"/ending/" + orderId}/> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;