import React from 'react'
import Item from './Item'

const ItemList = (items) => {
    
    return (
        <div className='productos-centro'>
            {items.items.map(i => <Item key={i.id} item={i}></Item>)}
        </div>
    )
}

export default ItemList