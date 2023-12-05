import React from 'react'
import "./Card.css"
const Card = (props) => {
    const Stillar = `${props.className}   card `
  return (
    <div className={Stillar}>
        {props.children}
    </div>
  )
}

export default Card