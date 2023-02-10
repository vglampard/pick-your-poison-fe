import React from "react";

import DrinkBreakdown from "../DrinkBreakdown/DrinkBreakdown";

export default function DrinksBreakdownDisplay({ session }) {
  // Filter down the session object into just the drinks values
  const trimmedDrinks = (({ wine, beer, cider, spirit, alcopop }) => ({
    wine,
    beer,
    cider,
    spirit,
    alcopop,
  }))(session);


  // Function that removes any null entries from the object and returns kvs array (REFACTOR!)
  function trimToDrinks(trimmedDrinks) {
    let entries = Object.entries(trimmedDrinks);
    let finalTrim = [];
    for (let entry of entries) {
      if (entry[1] !== 0) {
        finalTrim.push(entry);
      }
    }
return finalTrim
    // return Object.fromEntries(finalTrim);
  }

  const drinks = trimToDrinks(trimmedDrinks);
  drinks.map((drink)=>{
    console.log("drinks iteratinng:", drink)}
  )
  console.log("drinks final trimmed", drinks)
  return <div>Here are your drinks:  {drinks}:
{drinks.map((drink)=>{
  return <DrinkBreakdown drink ={drink[0]} amount = {drink[1]}/>}
)} 

  </div>;
}


// map over an array of arrays. 7
// for each item in the array, render item[1] images of type item[0]