import React, {useState,  useContext} from "react";
import  {CartContext}  from "../Context/Context";
import {ItemCount} from "../ItemCount/ItemCount";

export default function ItemDetail(props) {

    const [count, setCount] = useState(0);

    const [products, productsCount, addProducts, delProduct, getGrandTotal] = useContext(CartContext);

    function giveMount(c) {
        setCount(c);
    }

    return (
        <div>
            <ItemCount
            func={giveMount}
            nombre={props.nombre}
            precio={props.precio}
            />
            <input onClick={()=> addProducts(props.nombre, count)}  type="button" value={`Añadir al carro ${count}` } />
        </div>
    );
}
