import React from 'react';
import { useState, useEffect} from 'react';

export const CartContext = React.createContext([]);


const CartContextProvider = props => {
    
    const [products, setProducts] = useState([]);

    function addProduct(product, quantity)  {
        setProducts([...products, {'nombre':product, 'quantity':quantity }]);
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
