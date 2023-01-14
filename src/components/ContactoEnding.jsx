import React from "react";
import { Link } from "react-router-dom";


const ContactoEnding = () => {
    return(
        <div className="container text-center my-5">
            <div className="colorNegro">
                <h1 className="colorBlanco my-5"><b>SU MENSAJE FUE ENVIADO CON EXITO</b></h1>
                <h2 className="my-3">A la brevedad nos estaremos comunicando con usted.</h2>
                <h3 className="mb-5">Gracias por confiar en nuestros productos!</h3>
                <Link to={"/"} className="btn bgNegro fw-bold m-5">Volver al Inicio</Link>
            </div>
        </div>
    )
}

export default ContactoEnding;