import React, { useEffect, useState } from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'
import { getAllItems, getAllItemsFrom } from '../firebase/firebaseConfig'



const ItemListContainer = () => {

  let {categoryId} = useParams()

  const [prods, setProds] = useState([])

  useEffect( () => {

    const result = categoryId? getAllItemsFrom(categoryId) : getAllItems();

    result.then( itemsPromise => {
      setProds(itemsPromise)
    } )

  } , [categoryId] )

  return (
    <>
        <div>
            <ItemList items={prods}></ItemList>
        </div>
    </>
    
  )
}

export default ItemListContainer