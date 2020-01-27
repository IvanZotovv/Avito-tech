import React from 'react'
import { useHistory } from "react-router-dom";


const LinkToItem = ({unSelectedItem}) => {

  const history = useHistory();

  const handelClose = () => {
    history.push('')
    unSelectedItem('')
  }

  return (
    <div>
      ddd
      Какая-то шляпа
      <button onClick={handelClose}>Назад</button>
    </div>
  )
}

export default LinkToItem;