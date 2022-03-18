import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const { totalItemsCart } = useContext(CartContext)

  return (
    <div className='flex flex-row mt-2 md:mt-0'>
      <Link to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      {totalItemsCart() > 0 && <Link to="/cart"><div className='bubble bg-teal-500'>{totalItemsCart()}</div></Link>}
    </div>
    
  )
}

export default CartWidget