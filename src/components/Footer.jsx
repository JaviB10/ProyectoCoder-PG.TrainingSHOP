import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (

        <div className="container-fluid m-0 p-0">

            <div className="row d-flex align-items-center bannerFooter"> 

                <div className="col-12 col-md-3 d-flex justify-content-center">

                    <NavLink className="link-dark text-decoration-none" to={"/"}>

                        <img className="img-fluid mt-5" src={"/images/logo-pgtraining2.png"} alt={"Logo PG TRAINING"} />

                    </NavLink>
                    
                </div>
                <article className="col-12 col-md-3 text-center text-md-start colorBlanco">

                    <h2 className="h3 colorAmarillo">DIRECCIÓN</h2>
                    <p> Av. Provincias Unidas 2379 </p>
                    <p> Rosario (S2000) Santa Fe, Argentina. </p>

                </article>
                <article className="col-12 col-md-3 text-center text-md-start colorBlanco">

                    <h2 className="h3 colorAmarillo">CONTACTO</h2>
                    <p> Email: info@pgtrainingSHOP.com.ar </p>
                    <p> Teléfono: +54 (341) 531 9116 </p>

                </article>
                <article className="col-12 col-md-3 text-center text-md-start colorBlanco">

                    <h2 className="h3 colorAmarillo">HORARIOS</h2>
                    <p> Lunes a Viernes: 08:00 a 21:00 hs. </p>
                    <p> Sábado: 10:00 a 12:00 hs. </p>

                </article>
                <p className="text-center colorBlanco">&copy; 2022 PG Training SHOP - Todos los derechos reservados </p>
                <p className="text-center colorBlanco"> Desarrollado por Ballón Javier </p>

            </div> 

        </div> 
    )
}

export default Footer;