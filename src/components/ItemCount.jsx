import React from "react";
import { useState , useEffect } from "react";

const ItemCount = ({stockItems}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);

    useEffect(()=>{
        setStock(stockItems)
    },[stockItems]);

    const incrementarStock = () => {
        if (counter < stock) {
            setCounter(counter + 1);
        }
    }

    const decrementarStock = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    }

    const onAdd = () => {
        if ((stock > 0) && (counter <= stock)) {
            console.log("Agregaste: " + counter + " Productos al carrito!");
            setStock(stock - counter)
            setCounter(0)
        }
        
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-primary" onClick={decrementarStock}> - </button>
                        <button className="btn btn-primary"> {counter} </button>
                        <button type="button" className="btn btn-primary" onClick={incrementarStock}> + </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary" onClick={onAdd}> Agregar al carrito </button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount