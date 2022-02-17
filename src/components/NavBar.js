import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <header className='nav-container'>
            <div><h4>My React App</h4></div>
            <div>
                <nav className='nav-category-list'>
                    <a href=''>Primer Link</a>
                    <a href=''>Segundo Link</a>
                    <a href=''>Tercer Link</a>
                    <a href=''>Cuarto Link</a>
                </nav>
            </div>
            <div className='nav-cart-icon'>
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar