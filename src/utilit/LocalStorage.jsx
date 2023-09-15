const getStoredData = () => {
   const storedStringData = localStorage.getItem('cart');
   if(storedStringData){
      return JSON.parse(storedStringData);
   }
   return [];
}

const saveDataToLS = data => {
   const stringifyData = JSON.stringify(data);
   localStorage.setItem('cart', stringifyData);
}

const addToLS = data => {
   const cart = getStoredData();
   cart.push(data);
   // save to local storage
   saveDataToLS(cart);
}

const removeItem = id => {
   const data = getStoredData();
   const newData = data.filter(inf => inf !== id);
   saveDataToLS(newData);
}

export {addToLS, getStoredData, removeItem}