import React,{ useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ListOfItems from './components/List';
import LinkToItem from './components/LinkTo';
import getItems from './GetApi/GetApi';
import {Context} from './context';
import {URL, URL_ITEM} from './constant';
import './App.css';


const App = () => {
  const [placeForSale, setPlaceForSale] = useState([]);
  const [selectItem, setSelectItem] = useState('');
  const [object, setObject] = useState([]);
  const [contentLoading, changeCondition] = useState(false);
  const history = useHistory();
  
  const location = useLocation()

  useEffect(() => {
    getItems.getAllObjects(URL).then((res) => {
      setPlaceForSale(res);
      changeCondition(true);
    })
    .catch((err) => {
      throw new Error(err)
    })
  }, [placeForSale.length]);


  useEffect(() => {
    if(selectItem){
      getItems.getCurrentObject(`${URL_ITEM}${location.pathname}`).then((res) => {
        setObject(res);
      })
      .catch((err) => {
        throw new Error(err)
      })      
    } 
  }, [selectItem.length])

  const handleClick = (id) => {
    history.push(`${id}`)
    setSelectItem(id)
  }

  const handelClose = () => {
    history.push('')
    setSelectItem('')
  }

  return (
    <Context.Provider value={{placeForSale, object, handleClick, handelClose}}>
      <div>
        {
          location.pathname.length === 1 ? <div className='main'>
            <h1 className='main-title'>Продажа, аренда квартир</h1>
            {
              contentLoading && placeForSale ? 
              <ListOfItems selectItem={setSelectItem} list={placeForSale}/> : 
              <div>Loading...</div>
              }
          </div> :  
            ReactDOM.createPortal(
              <main className='main-section'>
                <LinkToItem unSelectedItem={setSelectItem}>
                  <h1>Modal</h1>
                </LinkToItem>
              </main>,
              document.getElementById('portal')
            )            
        }         
      </div>        
    </Context.Provider>
  );
}

export default App;
