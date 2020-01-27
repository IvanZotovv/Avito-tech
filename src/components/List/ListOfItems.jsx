import React from 'react'
import Items from '../Items/Items'
import './List.scss'


const ListOfItems = ({list, selectItem}) => {
  return (
    <ul className='list'>
      {list.map(i => 
        <Items selectItem={selectItem} item={i} key={i.id} />
      )}
    </ul>       
  )
}

export default ListOfItems;