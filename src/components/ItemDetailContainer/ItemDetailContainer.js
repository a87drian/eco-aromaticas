import React, { useState, use} from 'react';
import { useEffect } from 'react/cjs/react.development';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(props) {
    const [item,setItem] = useState(false);
    let id = props.match.params.id;
        
    useEffect(() => {
    
        setTimeout(() => {
    
            fetch(`https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`)
            .then(response => {
                return response.json();
            })  
            .then(data => {
                setItem(data);
            });
        },1000);
    }, []);

    return (
         <div>
          {item ? (
         <ItemDetail nombre={item.nombre} precio={item.precio} id={item.id} />
        ) : (
         <p>LOADING...</p>
        )}
        </div>
  );


}
