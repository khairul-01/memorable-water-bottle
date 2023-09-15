import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredData, removeItem } from "../../utilit/LocalStorage";
import Cart from "../card/Cart";

const Bottles = () => {
   const [bottles, setBottles] = useState([]);
   useEffect(()=> {
      fetch('bottle.json')
      .then(res => res.json())
      .then(data => setBottles(data))
   },[])

   // load cart from local storage
   useEffect(()=>{
      console.log('called the useEffect', bottles.length);
      if(bottles.length){
         const storedCart = getStoredData();
         console.log(storedCart);
      
         const savedCart = [];
         for(const id of storedCart){
            console.log(id);
            const bot = bottles.find(data => data.id === id);
            if(bot){
               savedCart.push(bot);
            }
         }
         console.log('saved cart', savedCart);
         setListedBottle(savedCart);
      }
   },[bottles])

   const [listedBottle, setListedBottle] = useState([]);
   const bottleHandler = (bottle) => {
      console.log(bottle);
      console.log('added to cart');
      const newList = [...listedBottle, bottle];
      setListedBottle(newList);
      addToLS(bottle.id);
   }
   const handleRemove = id => {
      const newCart = listedBottle.filter(ind => ind.id !==id);
      setListedBottle(newCart);
      removeItem(id);
   }

   return (
      <div>
         <h2>Bottles here: {bottles.length}</h2>
         
         <Cart handleRemove={handleRemove} cart ={listedBottle} ></Cart>
         <div className="bottles-container">
            {
               bottles.map(bottle => <Bottle key={bottle.id} 
                  bottleHandler = {bottleHandler} 
                  bottle = {bottle}></Bottle>)
            }
         </div>
      </div>
   );
};

export default Bottles;