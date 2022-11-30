import React from "react";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="row">

            <div className="col-md-6">

                <nav className="navbar navbar-expand-md">

                    <div className="container-fluid">

                        <a className="navbar-brand" href={"./index.html"}><img src={"./images/logo-pgtraining.png"} alt={"Logo PG TRAINING"}/></a>
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">

                            <ul className="navbar-nav">

                                <li className="nav-item active">

                                    <a className="nav-link fw-bolder colorNegro" href={"./index.html"}>

                                        INICIO

                                    </a>

                                </li>
                                <li className="nav-item dropdown">

                                    <a className="nav-link dropdown-toggle fw-bolder colorNegro" data-bs-toggle="dropdown" href={"./index.html"} role="button" aria-expanded="false">
                                        
                                        CATEGORIAS

                                    </a>
                                    <ul className="dropdown-menu">

                                        <li><a className="dropdown-item fw-bolder" href={"#act1"}>MUSCULACIÓN</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act2"}>CARDIO</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act3"}>PESO LIBRE</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act4"}>ESTRUCTURAS DE FUERZA</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act5"}>BOXEO</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act6"}>YOGA Y PILATES</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act7"}>BANCOS</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act8"}>ACCESORIOS</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act9"}>MULTIESTACIONES</a></li>
                                        <li><a className="dropdown-item fw-bolder" href={"#act10"}>INDUMENTARIA</a></li>

                                    </ul>

                                </li>
                                <li className="nav-item">

                                    <a className="nav-link fw-bolder colorNegro" href={"./index.html"}>


                                        CONTACTO

                                    </a>

                                </li>

                            </ul>

                        </div>

                    </div>  

                </nav>
                
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                
                <CartWidget />

            </div>

        </div>
    );
}

export default NavBar;