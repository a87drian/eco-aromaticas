export const Cart = (props) => {
 
    return (
        <body>
            {console.log(props.list[0].product_image)}

            <div>
                <h3>{props.list[0].product_name}</h3>    
                <img src={props.list[0].product_image} />
                <h4>{props.list[0].product_price}</h4>
                

            </div>
 


            

            
            

            


        </body>
        )
    
}