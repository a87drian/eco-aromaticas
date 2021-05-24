import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../Context/Context";
import { getFirestore } from '../Firebase/'



export default function Cart() {
  const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  const [OrderId, setOrderId] = useState(0);
  const handleClick = () => {
    const db = getFirestore();
    const order = db.collection("order");
    const newOrder = {
      buyer: 'adrian',
      items: ''
  
    };
    order.add(newOrder).then(({id}) => {
      setOrderId(id);
    } ).catch(err =>{
      console.log("error" + err);
    });
  } 

  useEffect(()=>{
    console.log(products)
  })

  return (
    <div>
      <h1>
        Bienvenidos al Cart
      </h1>
      {products.map((p) => (
        <div>
          <p>Item: {p.nombre}</p>
          <p>Cantidad: {p.quantity}</p>

        </div>
      ))
      }
      <button onClick={handleClick}>Comprar</button>
    </div>
  )


}
