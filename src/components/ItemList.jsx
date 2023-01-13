import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return(

        <div className="container my-5">

            <div className="row">

                {items.map(item =>
                    <div className="col-12 col-md-3 my-3" key={item.id}>

                        <Item item={item} />  

                    </div>

                )}
            </div>

        </div>
    )
}

export default ItemList;