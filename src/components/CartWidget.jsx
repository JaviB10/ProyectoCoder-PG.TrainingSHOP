import React from "react";

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-light position-relative">
            <img src={"/images/cart3.svg"} alt={"Cart"} width={32}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                1
            </span>
        </button>
    )
}

export default CartWidget