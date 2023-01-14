import React from "react";
import {Link, NavLink} from "react-router-dom"
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <div className="container-fluid">
            <div className="position-relative">
                <Link to={"/"}><img src={"/images/logo-pgtraining.png"} alt={"Logo PG TRAINING"} className="my-4"/></Link>
                <div className="position-absolute top-50 end-0 translate-middle-y">
                    <CartWidget/>
                </div>
            </div>
            <div className="d-flex justify-content-center text-center">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container d-flex justify-content-center">
                        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <NavLink className="nav-link fw-bolder text-light" to={"/"}>INICIO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link fw-bolder text-light" to={"/category/proteinas"}>PROTEINAS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link fw-bolder text-light" to={"/category/creatinas"}>CREATINAS</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;