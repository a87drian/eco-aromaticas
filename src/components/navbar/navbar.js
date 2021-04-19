import './navbar.css'

export const Navbar = (props) => {
    const handleClick = () => {
        alert(`Hola ${props.user.name}`)
    }
    
    return (
        <header className='navbar'>
            <img src='' alt='logo'/>
            <nav>
                <ul className='links-list'>
                    <li className='links-link'>{props.navigation[0]}</li>
                    <li className='links-link'>{props.navigation[1]}</li>
                    <li className='links-link'>{props.navigation[2]}</li>

                </ul>
            </nav>
            <div className='right'>
                <input type='text' placeholder='Search'/>
                <span>
                    <img className='cart-icon' src=''/>
                    <p>{props.cartQuantity}</p>
                </span>
                    <img className='avatar' src={props.user.avatar} alt='User' onClick={handleClick}/>
                
            </div>
        </header>
        
        )
}