import React, { useState, useEffect } from "react"; 
import Item from "../Item/Item"

function ItemList(props) {
    const [items, setItems] = useState(false);
    useEffect(() => {
        setTimeout(() =>{
                fetch("https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items")
                .then(response => {
                return response.json();
                })
                .then(data => {
                setItems(data);
                });
            }, 3000);
        }, []);
        
   return (
     <div>
         {items ? (
             items.map((p,i) => (
                 <Item
                    id={p.id}
                    key={i}
                    nombre={p.nombre}
                    precio={p.precio}
                    categoria={p.categoria}
                    />
             ))
         ) : (
                <p>Buscando datos</p>  
                 
         )}      
     </div>
   );
}
export default ItemList;
