import React from "react";
import { Link } from "react-router-dom";

const Publicidad = () => {
    return (
        <div className="row d-flex flex-column flex-md-row m-0 seccionPublicidad ">
            <div className="col-12 col-md-6 d-flex justify-content-center">
                <img src={"/images/productosPublicidad.png"} alt={"Productos Publicidad"} className="w-100" />
            </div>
            <div className="col-12 col-md-6 d-flex align-self-center align-items-center flex-column text-center text-light">
                <h2 className="my-3">¿TODAVIA NO ADQUIRISTE NUESTROS SUPLEMENTOS DEPORTIVOS?</h2>
                <p className="my-3">Nuestra tienda cuenta con todo lo que tu cuerpo necesita para el entrenamiento diario. No dudes en contactarnos!</p>
                <Link to={"/contacto"} className="btn btn-outline-light fw-bold my-5 bgNegro">Contáctanos</Link>
            </div>
        </div>
    )
}

export default Publicidad;