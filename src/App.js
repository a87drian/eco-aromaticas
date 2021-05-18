import React from "react";
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import {Navbar} from './components/navbar/navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer' ;
import {ItemCount} from './components/ItemCount/ItemCount'
import {useState} from 'react';
import CartContextProvider from "./components/Context/Context";
import Cart from "./components/Cart/Cart"


function App() {
  const USER = {
    name: 'Adrian Chaves',
    avatar: 'https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1482&q=80'
  }
  const CART = 2
  const NAVIGATION = ['Nosotros','Productos','Contacto']
  return (
    <div>
     <CartContextProvider>
      <BrowserRouter>
           <Navbar user={USER} cartQuantity= {CART} navigation={NAVIGATION}/>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/itemdetail/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />

            
          </Switch>
      </BrowserRouter>
      </CartContextProvider>  
    </div>
  )
}

export default App;
