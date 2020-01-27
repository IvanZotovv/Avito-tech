import React from 'react'
import './Items.scss'
import { useHistory } from "react-router-dom";



const Items = ({item, selectItem}) => {

  const history = useHistory();

  const handleClick = () => {
    history.push(`${item.id}`)
    selectItem(item.id)
  }


  return (
    <li className='item' 
      key={item.id}
      onClick={handleClick}
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

export default Items;