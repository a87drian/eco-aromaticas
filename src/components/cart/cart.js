export const Cart = (props) => {
 
    return (
        <body>
            {console.log(props.list[0].product_image)}

            {props.list.map((p,i) => (

                <div>
                    <h3>{p.product_name}</h3>    
                    <img src={p.product_image} />
                    <h4>{p.product_price}</h4>
                    <input type="number"></input>
                    <button type="button">Agregar</button>
                </div>  )
             
             )}            



        </body>
    )
    
}