import React, { useState, use} from 'react';
import { useEffect } from 'react/cjs/react.development';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getFirestore } from '../Firebase/'

export default function ItemDetailContainer(props) {
    const [item,setItem] = useState(false);
    let id = props.match.params.id;
        
 /*   useEffect(() => {
    
        setTimeout(() => {
    
            fetch(`https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`)
            .then(response => {
                return response.json();
            })  
            .then(data => {
                setItem(data);
            });
        },1000);
    }, []);*/
    useEffect(() => {

        const db = getFirestore();
        const item = db.collection("items").doc(id);

        item.get().then((doc)=>{
            if(doc.exists){
                const data = {id:doc.id,...doc.data()}
                setItem(data)
                console.log(item.id);
            

            }
        }).catch((error) => {
            console.log("Error =>" + error);
        })


    }, [])

    return (
         <div>
          {item ? (
         <ItemDetail name={item.name} price={item.price} id={item.id} />
        ) : (
         <p>LOADING...</p>
        )}
        </div>
  );


}
