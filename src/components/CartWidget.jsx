import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            <img src={"/images/cart-dash.svg"} alt={"Cart"} width={60}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-transparent">
                1
            </span>
        </button>
    )
}

export default CartWidget