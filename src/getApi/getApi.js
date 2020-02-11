import React from 'react';

class GetApi {
  constructor(URL, URL_ITEM) {
    this.URL = URL;
    this.URL_ITEM = URL_ITEM
  }

  sendRequest(url) {
    return new Promise((resolve, reject) => {
      fetch(url).then((res) => res.json()).then((res) => resolve(res))
        .catch((err) => reject(err));
    })
  };

  getAllObjects = (url = this.url) => this.sendRequest(url);

  getCurrentObject = (id) => this.sendRequest(id);
  
}

const getItems = new GetApi()

export default getItems;