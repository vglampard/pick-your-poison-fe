import React from "react";
import wine from "./wine.png"
import cider from "./cider.png"
import beer from "./beer.png"
import spirit from "./spirit.png"
import alcopop from "./alcopop.png"


export default function DrinksBreakdownDisplay({ session }) {
  // Filter down the session object into just hte drinks values
  const trimmedDrinks = (({ wine, beer, cider, spirit, alcopop }) => ({
    wine,
    beer,
    cider,
    spirit,
    alcopop,
  }))(session);

  // function renderImages(number, img) {
  //   let content = [];
  //   for (let i = 0; i < number; i += 1) {
  //     content.push(<img src={img} alt={img} aria-label={img} />);
  //   }
  //   return content;
  // }

  function renderAllIcons(drinks){
    for (let drink of drinks){
      let content = [];
      for (let i = 0; i < drink.length; i += 1) {
        content.push(<img src={drink} alt={drink} aria-label={drink} />);
      }
      return content;

    }
  }

  // Function that removes any null entries from the object (REFACTOR!)
  function trimToDrinks(trimmedDrinks) {
    let entries = Object.entries(trimmedDrinks);
    let finalTrim = [];
    for (let entry of entries) {
      console.log("entry", entry);
      if (entry[1] !== 0) {
        finalTrim.push(entry);
      }
    }
return finalTrim
    // return Object.fromEntries(finalTrim);
  }

  const drinks = trimToDrinks(trimmedDrinks);
  console.log("drinks final trimmed", drinks)
  return <div>Here are your drinks:
    {renderAllIcons(drinks)}
  </div>;
}


// map over an array of arrays. 7
// for each item in the array, render item[1] images of type item[0]