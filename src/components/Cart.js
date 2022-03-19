import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

const Cart = () => {
  const {itemsCart, addItem, removeItem, clearCart, totalItemsCart, totalPrecioCart} = useContext(CartContext)

  if( itemsCart.length === 0 ){
    return(
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 text-center">Tu Pedido</h1>
  
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100 rounded-tl rounded-bl">Item</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Nombre</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Precio</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Cantidad</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Total</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100 rounded-tr rounded-br">Eliminar</th>
          </tr>
        </thead>
        <tbody>
              <tr>
            <td className="py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex mb-6 border-gray-400 py-2">
      <span className="text-gray-700 text-2xl m-auto py-2">No hay items en el carrito</span>
    </div>
    <div className="flex border-t border-b mb-6 border-gray-400 py-2 mx-auto max-w-5xl px-5">
        <span className="text-gray-900 text-xl py-2">Total:</span>
        <span className="ml-auto text-gray-900 text-xl py-2">$0.00</span></div>
      <Link to={`/`}><button className="flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded m-auto mt-10">Seguir comprando</button></Link>
  </div>
</section>
    )
  }
  else{
    return(
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 text-center">Tu Pedido</h1>
  
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100 rounded-tl rounded-bl">Item</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Nombre</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Precio</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Cantidad</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100">Total</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-teal-100 rounded-tr rounded-br">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {itemsCart.map((item) => {
            return(
              <tr key={item.id}>
            <td className="px-4 py-3"><img style={{width: '70px'}} src={item.imgSrc}></img></td>
            <td className="px-4 py-3">{item.nombre}</td>
            <td className="px-4 py-3">${item.precio}</td>
            <td className="px-4 py-3">{item.qty}</td>
            <td className="px-4 py-3">${(item.precio*item.qty).toFixed(2)}</td>
            <td className="w-10 text-center">
              <button className='text-grey hover:text-red-600' onClick={()=>removeItem(item.id)}>Eliminar</button>
            </td>
          </tr>
            )
          })}
        </tbody>
      </table>
    </div>
    <div className="flex border-t border-b mb-6 border-gray-400 py-2 mx-auto max-w-5xl px-5">
        <span className="text-gray-900 text-xl py-2">Total:</span>
        <span className="ml-auto text-gray-900 text-xl py-2">${totalPrecioCart().toFixed(2)}</span></div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <button className="flex m-auto mt-10 text-white text-xl bg-teal-500 border-0 py-2 px-10 focus:outline-none hover:bg-red-600 rounded" onClick={()=>clearCart()}>Vaciar carrito</button>
    </div>
  </div>
</section>
    )
  }
}

export default Cart