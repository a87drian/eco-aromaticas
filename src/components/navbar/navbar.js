import './navbar.css'
import basket from '../../images/shopping-cart.svg'
import logo from '../../images/planet-earth.svg'
import React,{useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/Context"

export const Navbar = (props) => {
    const [products, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
    const handleClick = () => {
        alert(`Hola ${props.user.name}`)
    }
    
    return (
        <header className='navbar'>
            <img className='cart-icon' src={logo} alt='logo'/>
            <nav>
                <ul className='links-list'>
                    <li className='links-link'>{props.navigation[0]}</li>
                    <li className='links-link'>{props.navigation[1]}</li>
                    <li className='links-link'>{props.navigation[2]}</li>

                </ul>
            </nav>
            <Link to={'/cart'}>
                <div className='right'>
                    <input type='text' placeholder='Search'/>
                    <span className='cart'>
                        <img className='cart-icon' src={basket}/>
                        <p>{productsCount()}</p>
                    </span>
                    <img className='avatar' src={props.user.avatar} alt='User' onClick={handleClick}/>
                
                </div>
            </Link>
        </header>
        
        )
}