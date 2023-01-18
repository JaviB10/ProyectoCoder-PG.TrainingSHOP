import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";


const Checkout = () => {

    const {cart, sumTotal, cartTotal} = useContext(CartContext);
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
            
        });
        

    }

    if (cartTotal() === 0) {
        return(
            <div className="container text-center my-5 py-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="p-5 colorNegro text-uppercase">el carrito de compra se encuentra vacio</h1>
                        <Link to={"/"} className="btn bgNegro fw-bold m-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container d-flex justify-content-center mt-5 mb-5">
            <div className="row d-flex justify-content-around flex-md-row flex-column-reverse backgroundForm">
                <div className="col-md-4">
                    <form>
                        <div className="form-floating mt-5 mb-4">
                            <input className="form-control" type="text" placeholder={"Nombre"} required onInput={(e) => {setNombre(e.target.value)}}/>
                            <label htmlFor="nombre">Nombre</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input className="form-control" type="text" placeholder="Apellido" required onInput={(e) => {setApellido(e.target.value)}}/>
                            <label htmlFor="apellido">Apellido</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input className="form-control" type={"email"} id={"email"} name={"email"} placeholder={"name@example.com"} required onInput={(e) => {setEmail(e.target.value)}}/>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating mb-5">
                            <input className="form-control" type="tel" placeholder="Telefono" required onInput={(e) => {setTelefono(e.target.value)}}/>
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
            {orderId ? <Navigate to={"/ending/" + orderId}/> : ""}
            
        </div>
        
    )
}

export default Checkout;