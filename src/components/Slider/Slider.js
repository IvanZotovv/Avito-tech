import React, {useState} from 'react'
import './Slider.scss'

export default function Slider({arrayOfImage}) {
  const [image, setImage] = useState(null)


  const next = event => {
    const cuurentImg = event.target.nextElementSibling.src
    const currentId = arrayOfImage.findIndex(i => i === cuurentImg)
    const val = currentId === arrayOfImage.length-1 ? -1 : currentId
    setImage(arrayOfImage[val+1])
  }

  const prev = event => {
    const cuurentImg = event.target.parentNode.lastChild.src
    const currentId = arrayOfImage.findIndex(i => i === cuurentImg)
    const val = currentId === 0 ? arrayOfImage.length-1 : currentId
    setImage(arrayOfImage[val-1])
  }

  return (
    <div className="slider">
      <div className="slider-block">
        <a className="left" onClick={prev}>&lt;</a>
        <a className="right"  onClick={next}>&gt;</a>
        <img className="slider-block-image" src={image === null ? arrayOfImage[0] : image} alt="item"/>
      </div>
      <ul className="slider-list">
        {
          arrayOfImage.map((el, index) => <li className="slider-item">
            <img 
              className="slider-image" 
              index={index}
              onClick={() => setImage(el)} 
              src={el} alt=""
            />
          </li>)
        }
      </ul>      
    </div>
  )
}
