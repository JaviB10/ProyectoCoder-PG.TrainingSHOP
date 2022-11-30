import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="container-fluid py-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 alert alert-danger text-center" role="alert">
                    <p>{greeting}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;