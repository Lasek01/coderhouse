import { createContext, useState } from 'react'

const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [itemsCart, setItemsCart] = useState([])

    //BUSCADOR
    const isInCart = (itemId) => {
        const found = itemsCart.find(item => item.id === itemId)

        if (found === undefined){
            return false
        } 
        else {
            return true
        }
    }

    //AGREGAR ITEM
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

    //REMOVER ITEM
    const removeItem = (itemId) => {
        if (isInCart(itemId)){

            const updtCart = itemsCart.filter(i => i.id !== itemId);

            setItemsCart(updtCart)
        }
        else{
            setItemsCart([])
        }
    }

    //LIMPIAR CARRITO
    const clearCart = () => {
        setItemsCart([])
    }

    //CONTAR ITEMS DEL CARRITO
    const totalItemsCart = () => {
        let totalItems = 0
        itemsCart.forEach( i => totalItems += i.qty)
        return totalItems
    }

    //TOTAL PRECIO CARRITO
    const totalPrecioCart = () => {
        let totalPrecio = 0
        itemsCart.forEach( i => totalPrecio += i.precio*i.qty)
        return totalPrecio
    }

    return (
    <CartContext.Provider value={ {itemsCart, addItem, removeItem, clearCart, totalItemsCart, totalPrecioCart} }>
        {children}
    </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}


