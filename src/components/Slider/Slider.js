import React, {useState } from 'react'
import './Slider.scss'

const Slider = ({arrayOfImage}) => {
  const [image, setImage] = useState('')

  const getCurrentImageId = ({target}) => {
    return arrayOfImage.findIndex(i => i === target.parentNode.lastChild.src);
  }

  const returnedNextImage = (event) => {
    const id = getCurrentImageId(event)
    // const right = id === arrayOfImage.length-1 ? 0 : id+1;
    // const left = id === 0 ? arrayOfImage.length-1 : id-1;
    const whichWay = event.target.className === 'right' ? arrayOfImage[id+1] : arrayOfImage[id-1]
    setImage(whichWay)
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