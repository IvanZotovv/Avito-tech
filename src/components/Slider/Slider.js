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
    console.log(val.keyCode)
    if(val.keyCode === 37){
      return swipeLeft(id)
    } else if(val.keyCode === 39) {
      return swipeRight(id)
    }
    return id
  }

  const onClickEvent = (val, id) => {
    // console.log(val.target.className === SLIDE_DIRECTION.RIGHT ? swipeLeft(id) : swipeRight(id))
    // return val.target.className === SLIDE_DIRECTION.RIGHT ? swipeLeft(id) : swipeRight(id)
    if(val.target.className === SLIDE_DIRECTION.RIGHT){
      return swipeRight(id)
    } else if(val.target.className === SLIDE_DIRECTION.LEFT) {
      return swipeLeft(id)
    }
  }


  const getSliderDirection = (event, id) => {
    return  event.keyCode ? onKeyPressEvent(event, id) : onClickEvent(event, id)
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