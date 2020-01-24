import React,{ useState, useEffect } from 'react';
import './App.css';
import ListOfItems from './components/List/ListOfItems';
import { useLocation } from "react-router-dom";
import LinkToItem from './components/LinkTo/LinkToItem';
import ReactDOM from 'react-dom';



const URL = "http://134.209.138.34/items"

const URL_ITEM = "http://134.209.138.34/item/"

const getItem = ({url, id}) => {
  console.log(`${url}${id}`)
  return new Promise((resolve, reject) => {
      fetch(`${url}${id}`)
          .then(response => response.json())
          // .then(data => resolve(getFirstTenTickets(data)))
          .then(data => resolve(data))
          .catch(err => {
              reject(err);
          });
  })
}

const App = () => {
  const [placeForSale, setPlaceForSale] = useState(null);
  const [contentLoading, changeCondition] = useState(false);
  const [getId, setId] = useState(null)

  const location = useLocation()

  async function fetchData(){
    const res = await  fetch(URL)
    res
      .json()
      .then(res => setPlaceForSale(res))
      .catch(err => console.log(err))      
  }

  useEffect(() =>{
    fetchData()
    change()
  }, []);

  const change = () => changeCondition(true)

  const propsForItemSearch = {
    url: URL_ITEM,
    id: location.pathname.replace(/[/]/g, '')
  }

  const item = []

  if(location.pathname.length !== 1){
    getItem(propsForItemSearch).then(data => {
      // setId(data)
      // item.push(data)
      console.log(data)
    })
      .catch(err => console.log(err))       
  }



  console.log(item)

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
