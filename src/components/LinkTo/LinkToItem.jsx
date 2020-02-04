import React, {useContext} from 'react'
import Slider from '../Slider/Slider';
import {Context} from '../../context'
import './LinkToItem.scss'

const LinkToItem = () => {
 
  const {object, handelClose} = useContext(Context)

  return (
    <div className='item-spread'>
      {
        object.map(i => {
          return <div className="item-block">
            <Slider arrayOfImage={i.images}/>
            <div className="item-block-info">
              <h3 className="item-block-title">{i.title}</h3>
              <p className="item-block-adress">{i.address}</p>
              <div className="item-block-desc">{i.description}</div>
              <strong className="item-block-price">{i.price}</strong>
              <button className="item-block-button" onClick={() => handelClose()}>Назад</button>
            </div>
         </div>
        })
      }
    </div>
  )
}

export default LinkToItem;