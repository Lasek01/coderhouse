import React from 'react'
import Item from './Item'

const ItemList = (items) => {
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {items.items.map(i => <Item key={i.id} item={i}></Item>)}
                </div>
            </div>
        </section>
    )
}

export default ItemList