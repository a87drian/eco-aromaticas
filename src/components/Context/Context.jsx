import React from 'react';
import { useState, useEffect} from 'react';

export const CartContext = React.createContext([]);


const CartContextProvider = props => {
    
    const [products, setProducts] = useState([]);

    function addProduct(product, quantity)  {
        if(products.length === 0) {

            setProducts([...products, {'nombre':product, 'quantity':quantity }]);
        }
        else  {
            const index = products.findIndex(p => p.nombre === product)
            if(index != -1) {
                const newProducts = products;
                const p = products[index];
                newProducts.splice(index,1);
                p.quantity += quantity;
                newProducts.push(p);
                setProducts(newProducts);

            }else {
                setProducts([...products, {'nombre':product, 'quantity':quantity }]);

            }
        }


    };
    const productsCount = () => {
        return products.reduce((acc,p) => (acc += p.quantity), 0);
    };
    const delProduct = (id) => {
        products.splice(
            products.findIndex((p) => p.id === id), 1
         );
    }
    const getGrandTotal = () => {
        return products.reduce((acc, p) => (acc += p.price * p.quantity),0)
    }

// export default function CartContextProvider() {
    return (
    <CartContext.Provider value={[products, productsCount, addProduct, delProduct, getGrandTotal]}>
      {props.children}
    </CartContext.Provider>
  );
}
export default CartContextProvider;
