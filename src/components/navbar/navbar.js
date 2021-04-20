import './navbar.css'
import basket from '../../images/shopping-cart.svg'
import logo from '../../images/planet-earth.svg'

export const Navbar = (props) => {
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
            <div className='right'>
                <input type='text' placeholder='Search'/>
                <span className='cart'>
                    <img className='cart-icon' src={basket}/>
                    <p>{props.cartQuantity}</p>
                </span>
                    <img className='avatar' src={props.user.avatar} alt='User' onClick={handleClick}/>
                
            </div>
        </header>
        
        )
}