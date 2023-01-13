import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);
    
    return cartTotal() ? <Link to={"/cart"} className="btn position-relative">
            <img src={"/images/cart-dash.svg"} alt={"Cart"} width={40}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-transparent">
                {cartTotal()}
            </span>
        </Link> : "";
}

export default CartWidget