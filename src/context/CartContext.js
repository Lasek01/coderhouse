import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([])

    const addItem = (item, qty) => {
        const itemToAdd = {...item, qty}

        setItemsCart([...itemsCart, itemToAdd])
    }

    const clearCart = () => {
        setItemsCart([])
    }

    return (
    <CartContext.Provider value={ {addItem, itemsCart} }>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}


