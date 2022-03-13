import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <header class="text-gray-300 body-font bg-black">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-teal-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-gray-300">N&A Store</span>
            </Link>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link class="mr-5 hover:text-white" to="/category/men">Hombre</Link>
            <Link class="mr-5 hover:text-white" to="/category/women">Mujer</Link>
            <Link class="mr-5 hover:text-white" to="/category/unisex">Unisex</Link>
            </nav>
            <button class="text-2xl hover:text-white">
                <CartWidget></CartWidget>
            </button>
        </div>
    </header>
    )
}

export default NavBar