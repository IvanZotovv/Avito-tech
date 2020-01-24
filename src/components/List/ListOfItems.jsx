import React from 'react'
import Items from '../Items/Items'
import './List.scss'
// import LinkToItem from '../LinkTo/LinkToItem'


const ListOfItems = ({list}) => {
  return (
    <ul className='list'>
      {list.map(i => 
        <Items item={i} key={i.id} />
      )}
    </ul>       
  )
}

export default ListOfItems;