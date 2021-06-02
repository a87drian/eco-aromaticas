import React, { useState, useEffect } from "react"; 
import Item from "../Item/Item"
import { getFirestore } from '../Firebase/'


function ItemList(props) {
    // const [items, setItems] = useState(false);
    // useEffect(() => {
    //     setTimeout(() =>{
    //             fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items")
    //             .then(response => {
    //             return response.json();
    //             })
    //             .then(data => {
    //             setItems(data);
    //             });
    //         }, 3000);
    //     }, []);

    const [products, setProducts] = useState([]);

    useEffect(
        () => {
            const db = getFirestore();
            const itemcollection = db.collection("items");
            itemcollection.get().then(
                (querySnapshot) => {
                    if(querySnapshot === 0 ) {
                        console.log("vacio");
                    }
                    const data = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
                    setProducts(data);
                }       
            )

        }, [] )

   return (
     <div>
         {products ? (
             products.map((p,i) => (
                 <Item
                    id={p.id}
                    key={i}
                    nombre={p.name}
                    precio={p.price}
                    categoria={p.category}
                    />
             ))
         ) : (
                <p>Buscando datos</p>  
                 
         )}      
     </div>
   );
}
export default ItemList;
