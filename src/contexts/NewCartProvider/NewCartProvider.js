import React, { createContext, useEffect, useState } from "react";

export const NewCartContext = createContext();

const NewCartProvider = ({ children }) => {
 const [newCartItems, setNewCartItems] = useState([]);

 const addToCartBtn = (course) => {
  const exist = newCartItems.find((x) => x.id === course.id);
  if (exist) {
   setNewCartItems(
    newCartItems.map((x) =>
     x.id === course.id ? { ...exist, qty: exist.qty + 1 } : x
    )
   );
  } else {
   setNewCartItems([...newCartItems, { ...course, qty: 1 }]);
  }
 };

 const onRemoveBtn = (product) => {
  const exist = newCartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
   setNewCartItems(newCartItems.filter((x) => x.id !== product.id));
  } else {
   setNewCartItems(
    newCartItems.map((x) =>
     x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    )
   );
  }
 };

 let itemsPrice = newCartItems.reduce((a, c) => a + c.price * c.qty, 0);
 let vatPrice = itemsPrice * 0.15;
 let varTotal = itemsPrice + vatPrice;

 const [totalPrice, setTotalPrice] = useState(varTotal);
 useEffect(() => {
  setTotalPrice(varTotal);
 }, [varTotal]);

 return (
  <NewCartContext.Provider
   value={[
    newCartItems,
    setNewCartItems,
    addToCartBtn,
    onRemoveBtn,
    itemsPrice,
    vatPrice,
    varTotal,
    totalPrice,
    setTotalPrice,
   ]}
  >
   {children}
  </NewCartContext.Provider>
 );
};

export default NewCartProvider;
