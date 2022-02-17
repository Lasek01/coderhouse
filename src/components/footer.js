import React from 'react'

const Footer = (props) => {
  return (
    <>
      <div>este es mi footer</div>

      <div>Espero que te haya gustado mi sitio {props.name}</div>

      <button onClick={props.action}>Hace click acá!!!</button>
      
      {props.children}
    </>
  )
}

export default Footer