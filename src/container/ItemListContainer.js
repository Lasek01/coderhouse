import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import t1 from '../assets/img/t1.png'
import t2 from '../assets/img/t2.png'
import t3 from '../assets/img/t3.png'
import t4 from '../assets/img/t4.png'
import t5 from '../assets/img/t5.png'
import t6 from '../assets/img/t6.png'

const ItemListContainer = () => {

  const productos = [
    {id: '0', nombre:'T-shirt 1', img:t1, precio: 900},
    {id: '1', nombre:'T-shirt 2', img:t2, precio: 900},
    {id: '2', nombre:'T-shirt 3', img:t3, precio: 900},
    {id: '3', nombre:'T-shirt 4', img:t4, precio: 900},
    {id: '4', nombre:'T-shirt 5', img:t5, precio: 900},
    {id: '5', nombre:'T-shirt 6', img:t6, precio: 900}
  ]

  const [prods, setProds] = useState([])

  useEffect( () => {
    getProducts();
  } , [] )

  const getProducts = () => {
    const getProductsPromise = new Promise ((resolve, reject) => {
      setTimeout( () => {
        resolve(productos)
      }, 2000)
    })

    getProductsPromise.then( response => {
      setProds(response);
    })
  }

  return (
    <>
        <div className='item-list-container'>
            <ItemList items={prods}></ItemList>
        </div>
    </>
    
  )
}

export default ItemListContainer