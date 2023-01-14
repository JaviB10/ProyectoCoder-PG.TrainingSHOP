import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Contacto = () =>{

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [contacto, setContacto] = useState("");

    const generarContacto = () => {
        const fecha = new Date();
        const contacto = {
            datos: {nombre:nombre, apellido:apellido, email:email, mensaje:mensaje},
            date: `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} | ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
        }

        const db = getFirestore();
        const contactCollection = collection(db, "contact");
        addDoc(contactCollection, contacto).then((snapshot) => {
            setContacto(snapshot.id);
        }); 
    }

    return(
        <div className="bgContacto">
            <div className="container d-flex justify-content-center mt-5 mb-5">
                <div className="row d-flex justify-content-between flex-md-row flex-column-reverse">
                    <div className="col-md-4">
                        <form>
                            <div className="form-floating mt-5 mb-4">
                                <input className="form-control" id="nombre" type="text" placeholder="Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                                <label htmlFor="nombre">Nombre</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input className="form-control" id="apellido" type="text" placeholder="Apellido" onInput={(e) => {setApellido(e.target.value)}}/>
                                <label htmlFor="apellido">Apellido</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input className="form-control" id="email" type="email" placeholder="name@example.com" onInput={(e) => {setEmail(e.target.value)}}/>
                                <label htmlFor="email">Email</label>
                            </div>
                            <div class="form-floating mb-4">
                                <textarea class="form-control" id="floatingTextarea2" placeholder="Leave a comment here" style={{ height: "200px" }} onInput={(e) => {setMensaje(e.target.value)}}></textarea>
                                <label htmlFor="floatingTextarea2">Mensaje</label>
                            </div>
                            <div className="text-end my-5">
                                <button type="button" className="btn bgNegro btn-outline-light fw-bold" onClick={generarContacto}>Enviar Datos</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex align-items-end justify-content-center">
                        <img src={"/images/imagenContacto.png"} alt={"Foto para Contacto"} className="w-100" />
                    </div>
                </div>
                {contacto ? <Navigate to="/success" /> : ""}
            </div>
        </div>
    )
}

export default Contacto;