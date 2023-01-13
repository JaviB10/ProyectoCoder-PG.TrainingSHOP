import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const Cart = () => {
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return(
            <div className="container text-center mt-5 pt-5 mb-5 pb-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="p-5 colorNegro text-uppercase">no hay productos en el carrito</h1>
                        <Link to={"/"} className="btn bgNegro fw-bold m-5">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="row">
                <div className="text-center text-md-end mt-5 mb-2">
                    <Link onClick={clear} className="btn bgNegro fw-bold">Vaciar Carrito</Link>
                </div>
                <div className="col-12 pt-3 pb-3 bannerDetail">
                    <div className="table-responsive">
                        <table className="table text-center colorBlanco">
                            <thead>
                                <tr>
                                    <th scope="col">&nbsp;</th>
                                    <th scope="col" className="text-uppercase">Productos</th>
                                    <th scope="col" className="text-uppercase">Cantidad</th>
                                    <th scope="col" className="text-uppercase">Precio</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img className="rounded-3" src={item.imagen} alt={item.nombre} width={100} /></td>
                                        <td className="align-middle">{item.nombre}</td>
                                        <td className="align-middle">{item.quantity}</td>
                                        <td className="align-middle">${item.quantity * item.precio}</td>
                                        <td className="align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"images/trash3.svg"} alt={"Eliminar Productos"} width={30} /></Link></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3}>&nbsp;</td>
                                    <td className="text-center align-middle">Suma Total</td>
                                    <td className="align-middle"><b>${sumTotal()}</b></td>
                                </tr>
                            </tbody>
                        </table>
                        
                    </div>
                    
                </div>
                
                    
                    <div className="text-center text-md-end mt-2 mb-5">
                        <Link to={"/checkout"} className="btn bgNegro fw-bold">Finalizar Compra</Link>
                    </div>                        
                
                
            </div>
            
        </div>
    )
}

export default Cart;