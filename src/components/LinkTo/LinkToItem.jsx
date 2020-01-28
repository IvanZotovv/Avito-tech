import React,{ useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import './LinkToItem.scss'


const LinkToItem = ({unSelectedItem, selectItem}) => {

  const [contentLoading, changeCondition] = useState(false);

  useEffect(() =>{
      changeCondition(true);
  });

 
  const history = useHistory();
  const handelClose = () => {
    history.push('')
    unSelectedItem('')
  }


  const [stateImage, setStateImage] = useState({
    currentIndex: 0,
    length: 0
  })

  // useEffect(() => {

  // }, [stateImage.length])


  console.log(stateImage)

  const getResult = typeof selectItem !== 'object' ? <div>Loading...</div> :
   <div className='item-spread'>
      {
        selectItem.map(i => {
          setStateImage({
            currentIndex: 0,
            length: i.images.length
          })
          return <div className="item-block">
            <div className="item-block-image-container">
              {/* <div className="background"> */}
                {/* <div className="left" onClick={prev}>left</div>
                <div className="right" onClick={next}>right</div> */}
              {/* </div> */}
              {
                i.images.map((el, index) => <div className="item-block-image-item">
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


  return (
    <div >
      {getResult}
    </div>
  )
}

export default LinkToItem;