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
  console.log(val)
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
  const [itemById, setItemById] = useState([]);
  const [isLocation, setLocation] = useState(); //flag
  const [contentLoading, changeCondition] = useState(false);

  const location = useLocation()

  console.log(location)

  useEffect(() =>{
    fetchData(URL).then((res) => {
      setPlaceForSale(res);
      changeCondition(true);
    })
    .catch((err) => {
      throw new Error(err)
    })
  }, [placeForSale.length]);

  const id = location.pathname.replace(/[/]/g, '')

  useEffect(() => {
    setLocation(location.pathname)
  }, [isLocation])

  // useEffect(() => {
  //   if(id){
  //     fetchData(`${URL_ITEM}${id}`).then((res) => {
  //       setItemById(res);
  //     })
  //     .catch((err) => {
  //       throw new Error(err)
  //     })      
  //   }

  // }, [itemById.length])

  console.log(isLocation)

  return (
      <div>
        {
          location.pathname.length === 1 ? <div>
            <h1 className='main-title'>Продажа, аренда квартир</h1>
            {
              contentLoading && placeForSale ? 
              <ListOfItems list={placeForSale} /> : 
              <div>Loading...</div>
              }
          </div> :  
            ReactDOM.createPortal(
              <main>
                <LinkToItem>
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
