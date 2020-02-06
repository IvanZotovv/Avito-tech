import React, {useContext} from 'react'
import Slider from '../Slider';
import { Button } from 'antd';
import {Context} from '../../context'
import './style.scss'

const LinkToItem = () => {
 
  const {object, handelClose} = useContext(Context)

  return (
    <div className='item-spread'>
      {
        object.map(i => {
          return <div className="item-block" key={i.price}>
            <Slider arrayOfImage={i.images}/>
            <div className="item-block-info">
              <h3 className="item-block-title">{i.title}</h3>
              <p className="item-block-adress">{i.address}</p>
              <div className="item-block-desc">{i.description}</div>
              <strong className="item-block-price">{i.price}</strong>
              <Button className="button" type="primary" onClick={() => handelClose()}>Назад</Button>
            </div>
         </div>
        })
      }
    </div>
  )
}

export default LinkToItem;