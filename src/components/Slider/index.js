import React, {useState, useEffect} from 'react'
import {getSliderDirection, getCurrentImageId, changeVal} from './utils' 
import './style.scss'

const Slider = ({arrayOfImage}) => {
  const [image, setImage] = useState('');

  const returnedNextImage = (event) => {
    const id = getCurrentImageId(arrayOfImage, image);
    const nextImageId = getSliderDirection(event, id, arrayOfImage);
    const defineNextImageId = !image ?  nextImageId+1 : nextImageId;
    setImage(arrayOfImage[defineNextImageId]);
  }


  useEffect(() => {
    window.addEventListener('keydown', returnedNextImage);

    return () => {
      window.removeEventListener('keydown', returnedNextImage);
    };
  }, [returnedNextImage]);

  const arrayLength = arrayOfImage.length;

  return (
    <div className="slider">
      <div className="slider-block">
        <a className={changeVal(arrayLength, 'arrowleft')} 
          onClick={returnedNextImage}
        >&lt;</a>
        <a className={changeVal(arrayLength, 'arrowright')}  
          onClick={returnedNextImage}
        >&gt;</a>          
        <img className="slider-block-image" src={image === '' ? arrayOfImage[0] : image} alt="item"/>
      </div>
      <ul className="slider-list">
        {
          arrayOfImage.map((el) => <li className="slider-item" key={el}>
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