import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none">
                <div className="card text-light efecto border-dark">
                    <img className="card-img-top" src={item.imagen} alt={item.nombre}/>
                        <div className="card-body text-center bgNombre rounded-bottom">
                            <p className="card-text">{item.nombre}</p>
                        </div>
                </div>
        </Link>
    )
}


export default Item;