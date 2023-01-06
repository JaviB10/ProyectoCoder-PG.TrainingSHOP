import React , { useState , useEffect } from "react";
import {Link} from "react-router-dom"

const ItemCount = ({stockItems, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItems);
    const [vendido, setVendido] = useState(false);

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

    const addToCart = (quantity) => {
        setStock(stockItems - quantity);
        setCounter(1);
        setVendido(true);
        onAdd(quantity);
        /*
        if ((stock > 0) && (counter <= stock)) {
            console.log("Agregaste: " + counter + " Productos al carrito!");
            setStock(stock - counter)
            setCounter(0)
        }*/
        
    }
    
    return (

        <div className="d-flex justify-content-center">

            <div className="btn-group pe-2" role="group" aria-label="Basic example">

                <button type="button" className="btn btn-dark" onClick={decrementarStock}> - </button>
                <button className="btn btn-dark"> {counter} </button>
                <button type="button" className="btn btn-dark" onClick={incrementarStock}> + </button>

            </div>

            {vendido ? <Link to={"/cart"} className="btn btn-dark">Finalizar Compra</Link> : <button className="btn btn-dark" onClick={() => {addToCart(counter)}}> Agregar al carrito </button>}
        
        </div>
    )
}

export default ItemCount