import React from 'react'
import { Link } from 'react-router-dom'

const Item = (item) => {

    return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link className="block relative rounded overflow-hidden" to={`/item/${item.item.id}`}>
                        <img alt={item.item.nombre} className="object-cover object-center h-full block" src={item.item.img}/>
                    </Link>
                    <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.item.genero}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.item.nombre}</h2>
                    <p className="mt-1">${item.item.precio}</p>
                    </div>
                </div>
    )
}


export default Item