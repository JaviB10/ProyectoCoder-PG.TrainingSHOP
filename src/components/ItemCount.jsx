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
    }
    
    return (
        <div className="row d-flex justify-content-center m-0">
            <div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button className="btn bgNegro fw-bold" type="button" onClick={decrementarStock}> - </button>
                    <button className="btn bgNegro fw-bold"> {counter} </button>
                    <button className="btn bgNegro fw-bold" type="button" onClick={incrementarStock}> + </button>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                <div>
                    {vendido ? <Link to={"/cart"} className="btn bgNegro fw-bold">Finalizar Compra</Link> : <button className="btn bgNegro fw-bold" onClick={() => {addToCart(counter)}}> Agregar al carrito </button>}
                </div>
            </div>
        </div>
    )
}   

export default ItemCount