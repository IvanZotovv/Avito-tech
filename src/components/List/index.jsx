import React, {useContext} from 'react'
import Card from './Items'
import { List, Item } from 'antd';
import {Context} from '../../context'
import './style.scss';

const ListOfItems = ({selectItem}) => {
  const list = useContext(Context);
  const {placeForSale} = list;
  return (
    <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 2,
      lg: 3,
      xl: 4,
      xxl: 4,
    }}

    dataSource={placeForSale}
    renderItem={item => (
      <List.Item>
          <Card title={item.title} selectItem={selectItem} item={item} key={item.id}/>
      </List.Item>
    )}
  />


    // <ul className='list'>
    //   {placeForSale.map(i => 
    //     <Items selectItem={selectItem} item={i} key={i.id} />
    //   )}
    // </ul>       
  )
}

export default ListOfItems;