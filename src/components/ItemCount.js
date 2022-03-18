import React, { useState } from 'react'

const ItemCount = ({initial, stock, addToCart}) => {

    const [count, setCount] = useState(initial)
    
    const subCount = () => { 
        if(count > initial) setCount(count - 1)
    }

    const addCount = () => { 
        if(count < stock) setCount(count + 1)
    }

    return (
    <>
    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500 text-xl pt-2">Cantidad</span>
        <span className="ml-auto text-gray-900"><button className='boton-cantidad bg-teal-500 hover:bg-teal-600' onClick={subCount}>-</button>{count}<button className='boton-cantidad bg-teal-500 hover:bg-teal-600' onClick={addCount}>+</button></span>
    </div>
    <div className="flex">
        <span className="text-gray-500 text-lg pt-1">Stock disponible: {stock}</span><button className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded" onClick={()=>addToCart(count)}>Agregar al carrito</button>
    </div>
    </>
    )
}

export default ItemCount