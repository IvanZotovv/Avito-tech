import React, { Component } from 'react'
import {URL, URL_ITEM} from '../constant'

class getApi extends Component {
  constructor(URL, URL_ITEM){
    this.URL = URL,
    this.URL_ITEM = URL_ITEM
  }

  fetchAllItems(URL){
    return  new Promise(async(resolve, reject) => {
      try {
        const res = await fetch(URL);
        resolve(res.json());
      } catch(err) {
        reject(err);
      }
    })    
  }

  fetchItem(URL_ITEM){
    return  new Promise(async(resolve, reject) => {
      try {
        const res = await fetch(URL_ITEM);
        resolve(res.json());
      } catch(err) {
        reject(err);
      }
    })
  }
}

const getItems = new getApi()

export default getItems;