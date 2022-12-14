import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        
        <Link to={"/item/" + item.id} className="text-decoration-none text-black">

            <div className="col-12 my-5 bgExterno">

                <div className="column">

                    <div className="col-12 pt-5 d-flex justify-content-center imagenesAlto"> 
                                    
                        <img className="img-fluid" src={item.imagen} alt={item.nombre}/>
                                    
                    </div>
                    <div className="col-12 m-0 p-0 d-flex align-items-center">

                        <p className="text-center text-light p-5">{item.nombre}</p>

                    </div>

                </div>

            </div>

        </Link>
    )
}


export default Item;