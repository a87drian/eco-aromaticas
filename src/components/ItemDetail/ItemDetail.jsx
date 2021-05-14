import React, {useState, useEffect, useContext} from 'react';
import  CartContext  from "../Context/Context";
import {ItemCount} from "../ItemCount/ItemCount";

export default function ItemDetail(props) {

    const [count, setCount] = useState(0);
    const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);

    function giveMount(c) {  
        setCount(c);
    }

    return (
        <div>
            func={giveMount}
            <ItemCount
            nombre={props.nombre}
            precio={props.precio}
            />
            <input onClick={()=> addProduct(props.nombre, count)}  type="button" value={`Añadir al carro ${count}` } />
        </div>
    );
}
