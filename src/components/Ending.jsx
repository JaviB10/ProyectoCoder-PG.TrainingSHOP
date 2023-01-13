import React from "react";
import { useParams, Link } from "react-router-dom";

const Ending = () => {
    const {id} = useParams()

    return(
        <div className="container text-center mt-5 pt-5 mb-5 pb-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="p-5">Gracias por su compra</h1>
                    <p>Su numero de orden es: {id}</p>
                    <Link to={"/"} className="btn btn-dark">Volver al Inicio</Link>
                </div>
            </div>
        </div>
    )


}

export default Ending;