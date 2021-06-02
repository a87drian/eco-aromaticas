import React, {useState,  useContext} from "react";
import  {CartContext}  from "../Context/Context";
import {ItemCount} from "../ItemCount/ItemCount";

export default function ItemDetail(props) {
    console.log(props)
    const [count, setCount] = useState(0);

    const [products, productsCount, addProducts, delProduct, getGrandTotal] = useContext(CartContext);

    function giveMount(c) {
        setCount(c);
    }

    return (
        <div>
            <ItemCount
            func={giveMount}
            name={props.name}
            price={props.price}
            />
            <input onClick={()=> addProducts(props.name, count)}  type="button" value={`Añadir al carro ${count}` } />
        </div>
    );
}
