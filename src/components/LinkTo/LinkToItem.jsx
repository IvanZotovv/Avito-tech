import React from 'react'
import { useHistory } from "react-router-dom";


const LinkToItem = () => {

  const history = useHistory();

  const handelClose = () => {
    history.push('')
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