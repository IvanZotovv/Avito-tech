import React,{ useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './LinkToItem.scss'


const LinkToItem = ({unSelectedItem, selectItem}) => {

  const [contentLoading, changeCondition] = useState(false);
  useEffect(() =>changeCondition(true));
 
  const history = useHistory();
  const handelClose = () => {
    history.push('')
    unSelectedItem('')
  }


  const [index, setCurrentIndex] = useState({
    currentIndex: 0,
    length: 0
  })

  console.log(selectItem.map(i => i.images.length).join(''))

  useEffect(() => {
    setCurrentIndex({
      currentIndex: 0,
      length: selectItem.map(i => i.images.length).join('')
    })
  }, [index.length])


  console.log(index)
  return (
    <div className='item-spread'>
      {
        selectItem.map(i => {
          return <div className="item-block">
            {/* <a className="left" onClick={prev}>prev</a>
            <a className="rigth" onClick={next}>next</a> */}
            <div className="item-block-image-container">
              {
                i.images.map(el => <div className="item-block-image-item">
                  <img className="item-block-image" src={el} alt=""/>
                </div>)
              }
            </div>
            <div className="item-block-info">
              <h3>{i.address}</h3>
              <button onClick={handelClose}>Назад</button>
            </div>
         </div>
        })
      }
    </div>
  )
}

export default LinkToItem;