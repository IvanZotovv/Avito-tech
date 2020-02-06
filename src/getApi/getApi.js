import React from 'react';

class GetApi {
  constructor(URL, URL_ITEM) {
    this.URL = URL;
    this.URL_ITEM = URL_ITEM
  }

  fetchData(URL) {
    return  new Promise(async(resolve, reject) => {
      const res = await fetch(URL);
      resolve(res.json());
    })    
  }
}

const getItems = new GetApi()

export default getItems;