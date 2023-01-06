import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return(
            <div className="container disposicionItemDetail text-center">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="p-5">no hay productos en el carrito</h1>
                        <Link to={"/"} className="btn btn-dark">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container disposicionItemDetail">
            <div className="row backgroundCart p-5">
                <div className="col-md-12">
                    <table className="table text-center colorBlanco">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={4}>&nbsp;</th>
                                <th scope="col" className="text-center"><Link onClick={clear} className="btn btn-danger">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={100} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="align-middle">{item.quantity}</td>
                                    <td className="align-middle">${item.quantity * item.precio}</td>
                                    <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"images/trash3.svg"} alt={"Eliminar Productos"} width={30} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center align-middle">Suma Total</td>
                                <td className="align-middle"><b>${sumTotal()}</b></td>
                                <td className="text-center"><Link to={"/"} className="btn btn-success">Seguir Comprando</Link></td>
                            </tr>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td className="text-center"><Link to={"/checkout"} className="btn btn-success">Finalizar Compra</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;