import React from 'react'
import { useHistory } from "react-router-dom";
import './LinkToItem.scss'
import Slider from '../Slider/Slider';


const LinkToItem = ({unSelectedItem, selectItem}) => {
 
  const history = useHistory();
  const handelClose = () => {
    history.push('')
    unSelectedItem('')
  }

  return (
    <div className='item-spread'>
      {
        selectItem.map(i => {
          return <div className="item-block">

            <Slider arrayOfImage={i.images}/>
            <div className="item-block-info">
              <h3 className="item-block-title">{i.title}</h3>
              <p className="item-block-adress">{i.address}</p>
              <div className="item-block-desc">{i.description}</div>
              <strong className="item-block-price">{i.price}</strong>
              <button className="item-block-button" onClick={handelClose}>Назад</button>
            </div>
         </div>
        })
      }
    </div>
  )
}

export default LinkToItem;