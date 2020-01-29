import React from 'react'
import './Slider.scss'

export default function Slider({arrayOfImage}) {
  const currentImg = arrayOfImage[0]
  return (
    <div className="slider">
      <div className="slider-block">
        <img className="slider-block-image" src={currentImg}/>
      </div>
      <ul className="slider-list">
      {
        arrayOfImage.map(el => <li className="slider-item">
          <img className="slider-image" src={el} alt=""/>
        </li>)
      }
      </ul>      
    </div>
  )
}
