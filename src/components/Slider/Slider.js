import React, {useState } from 'react'
import './Slider.scss'

const Slider = ({arrayOfImage}) => {
  const [image, setImage] = useState('')

  const returnedNextImage = (event) => {
    const cuurentImg = event.target.parentNode.lastChild.src;
    const currentId = arrayOfImage.findIndex(i => i === cuurentImg);
    const right = currentId === arrayOfImage.length-1 ? 0 : currentId+1;
    const left = currentId === 0 ? arrayOfImage.length-1 : currentId-1;
    const whichWay = event.target.className === 'right' ? arrayOfImage[right] : arrayOfImage[left]
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