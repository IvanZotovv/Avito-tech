import React,{ useState, useEffect } from 'react';
import './App.css';
import ListOfItems from './components/List/ListOfItems';
import { useLocation } from "react-router-dom";
import LinkToItem from './components/LinkTo/LinkToItem';
import ReactDOM from 'react-dom';

const URL = "http://134.209.138.34/items"
const URL_ITEM = "http://134.209.138.34/item"


const fetchData = (val) => (
  new Promise(async(resolve, reject) => {
   try {
     const res = await fetch(val);
     resolve(res.json());
   } catch(err) {
     reject(err);
   }
 })    
)


const App = () => {
  const [placeForSale, setPlaceForSale] = useState([]);
  const [selectItem, setSelectItem] = useState('');
  const [object, setObject] = useState([]);
  const [contentLoading, changeCondition] = useState(false);

  const location = useLocation()


  useEffect(() =>{
    fetchData(URL).then((res) => {
      setPlaceForSale(res);
      changeCondition(true);
    })
    .catch((err) => {
      throw new Error(err)
    })
  }, [placeForSale.length]);


  useEffect(() => {
    if(selectItem){
      fetchData(`${URL_ITEM}${location.pathname}`).then((res) => {
        setObject(res);
      })
      .catch((err) => {
        throw new Error(err)
      })      
    } 
  }, [selectItem.length])


  return (
      <div>
        {
          location.pathname.length === 1 ? <div>
            <h1 className='main-title'>Продажа, аренда квартир</h1>
            {
              contentLoading && placeForSale ? 
              <ListOfItems selectItem={setSelectItem} list={placeForSale} /> : 
              <div>Loading...</div>
              }
          </div> :  
            ReactDOM.createPortal(
              <main>
                <LinkToItem selectItem={object} unSelectedItem={setSelectItem}>
                  <h1>Modal</h1>
                </LinkToItem>
              </main>,
              document.getElementById('portal')
            )            
        }         
      </div>      
  );
}

export default App;
