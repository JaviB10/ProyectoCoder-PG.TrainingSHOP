import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row d-flex bg-black">
                <div className="col-12 col-md-6 d-flex justify-content-center my-3">
                    <Link className="link-dark text-decoration-none" to={"/"}>
                        <img className="img-fluid mt-5" src={"/images/logo-pgtraining2.png"} alt={"Logo PG TRAINING"} />
                    </Link>
                </div>
                <div className="col-12 col-md-6 redesSociales row d-flex justify-content-center align-items-center">
                    <Link className="instagram" href="https://www.instagram.com/pg.training/?hl=es" target={"_blank"}><i className="fab fa-instagram" ></i> </Link>
                    <Link className="facebook" href="https://www.facebook.com/PG-training-100650208793813/?ref=py_c&_rdr" target={"_blank"}><i className="fab fa-facebook-f"></i></Link>
                    <Link className="whatsapp" href="https://api.whatsapp.com/send?phone=543415319116&app=facebook&entry_point=page_cta&fbclid=IwAR3eNcDfa0ZwRZnUkdUvm-yLo2_o_L9Q40bakhukY8_D2JMdQTxLzYb4GkI" target={"_blank"}><i className="fab fa-whatsapp"></i></Link>
                </div>
                <div className="col-12 mt-5">
                    <p className="text-center colorBlanco">&copy; 2022 PG Training SHOP - Todos los derechos reservados </p>
                    <p className="text-center colorBlanco"> Desarrollado por Ballón Javier </p>
                </div>
            </div>
        </div> 
    )
}

export default Footer;