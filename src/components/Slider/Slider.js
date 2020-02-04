import React, {useState } from 'react'
import {SLIDE_DIRECTION} from '../../constant'
import './Slider.scss'

const Slider = ({arrayOfImage}) => {
  const [image, setImage] = useState('')

  const getCurrentImageId = ({target}) => {
    return arrayOfImage.findIndex(i => i === target.parentNode.lastChild.src);
  }

  const swipeLeft = (id) => id === 0 ? arrayOfImage.length-1 : id-1;
  const swipeRight = (id) => id === arrayOfImage.length-1 ? 0 : id+1;

  const getSliderDirection = ({target}, id) => {
    return target.className === SLIDE_DIRECTION.RIGHT ? swipeLeft(id) : swipeRight(id)
  }

  const returnedNextImage = (event) => {
    const id = getCurrentImageId(event)
    const nextImageId = getSliderDirection(event, id);
    setImage(arrayOfImage[nextImageId])
  }

  const len = arrayOfImage.length;

  return (
    <div className="slider">
      <div className="slider-block">
        <a className={len > 1 ? 'left' : 'left-disable'} 
          onClick={returnedNextImage}
        >&lt;</a>
        <a className={len > 1 ? 'right' : 'right-disable'}  
          onClick={returnedNextImage}
        >&gt;</a>          
        <img className="slider-block-image" src={image === '' ? arrayOfImage[0] : image} alt="item"/>
      </div>
      <ul className="slider-list">
        {
          arrayOfImage.map((el) => <li className="slider-item" key={el.id}>
            <img 
              className="slider-image" 
              onClick={() => setImage(el)} 
              src={el} alt=""
            />
          </li>)
        }
      </ul> 
    </div>
  )
}

export default Slider;