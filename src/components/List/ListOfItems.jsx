import React, {useContext} from 'react'
import Items from '../Items/Items'
import './List.scss';
import {Context} from '../../context'

const ListOfItems = ({ selectItem}) => {
  const list = useContext(Context)
  const {placeForSale} = list
  return (
    <ul className='list'>
      {placeForSale.map(i => 
        <Items selectItem={selectItem} item={i} key={i.id} />
      )}
    </ul>       
  )
}

export default ListOfItems;