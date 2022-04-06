import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const ItemDetail = (item) => {

    const {addItem} = useContext(CartContext)


    const [inCart, setInCart] = useState(false)

    const addToCart = (qty) => {
        // alert(`Agregaste ${qty} items al carrito`)
        addItem(item.item, qty)
        setInCart(true);
    }

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt={item.item.nombre} className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src={item.item.imgSrc}/>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="uppercase text-sm title-font text-gray-500 tracking-widest">{(item.item.genero)}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{item.item.nombre}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-teal-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-teal-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-teal-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-teal-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-teal-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                            </div>
                            <p className="leading-relaxed pb-5">{item.item.desc}</p>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900 pb-5">${item.item.precio}</span>
                            </div>

                            {inCart?(
                                <Link to={`/cart`}><button className="flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded">Ir al carrito</button></Link>
                            )
                            :(
                                <ItemCount 
                                initial={1}
                                stock={item.item.stock}
                                addToCart={addToCart}
                                />
                            )
                            }

                            
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default ItemDetail