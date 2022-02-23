import React from 'react'

const Item = (item) => {

    return (
        <div className='producto'>
            <div className='img-container'>
                <img src={item.item.img} alt={item.item.nombre} className='producto-img'></img>
            </div>
            <h3> {item.item.nombre} </h3>
            <h4> ${item.item.precio} </h4>
        </div>
    )
}


export default Item