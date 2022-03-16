import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([])

    const isInCart = (itemId) => {
        const found = itemsCart.find(item => item.id === itemId)

        if (found === undefined){
            return false
        } 
        else {
            return true
        }
    }
    
    const addItem = (item, qty) => {
        
        if (isInCart(item.id)){

            const updtCart = itemsCart.map( i => i.id === item.id
                ?{...i, qty: (i.qty+qty)}
                :i)

            setItemsCart(updtCart)
        }
        else{
            const itemToAdd = {...item, qty}

            setItemsCart([...itemsCart, itemToAdd])
        }
    }

    const removeItem = (itemId) => {
        if (isInCart(itemId)){

            const updtCart = itemsCart.filter(i => i.id !== itemId);

            setItemsCart(updtCart)
        }
        else{
            alert(`Error - No se encontro item con id: ${itemId} en el carrito`)
        }
    }

    const clearCart = () => {
        setItemsCart([])
    }

    return (
    <CartContext.Provider value={ {addItem, removeItem, clearCart} }>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}


