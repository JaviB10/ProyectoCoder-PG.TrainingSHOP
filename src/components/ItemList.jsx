import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
    return(

        <div className="container disposicionItemList">

            <div className="row">

                {items.map(item =>
                    <div className="col-md-3" key={item.id}>

                        <Item item={item} />  

                    </div>

                )}
            </div>

        </div>
    )
}

export default ItemList;