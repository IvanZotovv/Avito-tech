import React, {useContext} from 'react'
import {Context} from '../../../context'
import './style.scss'

const Card = ({item}) => {

  const {handleClick} = useContext(Context)

  return (
    <li className='item' 
      key={item.id}
      onClick={() => handleClick(item.id)}
    >
      <h3 className='item-title'>{item.title}</h3>
    
      <div className='item-image'>
        <img src={item.previewImage} alt="item.previewImage"/>
        <p className='item-adress'>{item.address}</p>
        <b>{item.price}</b>
      </div>
    </li>       
  )
}

export default Card;