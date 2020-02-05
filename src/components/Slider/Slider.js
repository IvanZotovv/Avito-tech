import React, {useState, useEffect} from 'react'
import {SLIDE_DIRECTION} from '../../constant'
import './Slider.scss'

const Slider = ({arrayOfImage}) => {
  const [image, setImage] = useState('')

  const getId = (image) => arrayOfImage.findIndex(i => i === image)
  const getCurrentImageId = () => getId(image);
  

  const swipeLeft = (id) => id === 0 ? arrayOfImage.length-1 : id-1;
  const swipeRight = (id) => id === arrayOfImage.length-1 ? 0 : id+1;

  const onKeyPressEvent = (val, id) => {
    console.log(Object.values(SLIDE_DIRECTION).includes(val.code.toLowerCase()))
    return val.code.toLowerCase().includes(SLIDE_DIRECTION) ? swipeLeft(id) : swipeRight(id)
  }
  

  const onClickEvent = (val, id) => {
    return val.target.className.includes(SLIDE_DIRECTION) ? swipeLeft(id) : swipeRight(id)
  }
    

  const getSliderDirection = (event, id) => {

    // const checkKeyCode = (event) => Object.values(SLIDE_DIRECTION).includes(event.code.toLowerCase())
    // const rr = checkKeyCode(event) ? onKeyPressEvent(event, id) : id

    return event.code ? onKeyPressEvent(event, id) : onClickEvent(event, id)
  }
    
  


  const returnedNextImage = (event) => {
    const id = getCurrentImageId()
    const nextImageId = getSliderDirection(event, id);
    setImage(arrayOfImage[nextImageId])
  }


  useEffect(() => {
    window.addEventListener('keydown', returnedNextImage);

    return () => {
      window.removeEventListener('keydown', returnedNextImage);
    };
  }, [returnedNextImage]);

  const len = arrayOfImage.length;

  return (
    <div className="slider">
      <div className="slider-block">
        <a className={len > 1 ? 'arrowleft' : 'left-disable'} 
          onClick={returnedNextImage}
        >&lt;</a>
        <a className={len > 1 ? 'arrowright' : 'right-disable'}  
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