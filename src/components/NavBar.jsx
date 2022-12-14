import React from "react";
import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <header>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">

                <div className="container-fluid">

                    <Link className="navbar-brand" to={"/"}><img src={"/images/logo-pgtraining.png"} alt={"Logo PG TRAINING"}/></Link>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">

                        <ul className="navbar-nav">

                            <li className="nav-item active">

                                <NavLink className="nav-link fw-bolder colorNegro decoracionText" to={"/"}>

                                    INICIO

                                </NavLink>

                            </li>
                            <li className="nav-item dropdown">

                                <NavLink className="nav-link dropdown-toggle fw-bolder colorNegro" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                                
                                    CATEGORIAS

                                </NavLink>
                                <ul className="dropdown-menu">

                                    <li><NavLink className="dropdown-item fw-bolder " to={"/category/proteinas"}>PROTEINAS</NavLink></li>
                                    <li><NavLink className="dropdown-item fw-bolder" to={"/category/creatinas"}>CREATINAS</NavLink></li>
                                                
                                </ul>

                            </li>
                            <li className="nav-item">

                                <NavLink className="nav-link fw-bolder colorNegro decoracionText" to={"/"}>

                                    CONTACTO

                                </NavLink>

                            </li>

                        </ul>

                    </div>
                    <div className="">
                                
                        <CartWidget />

                    </div> 

                </div> 
                            
            </nav>

        </header>
    );
}

export default NavBar;