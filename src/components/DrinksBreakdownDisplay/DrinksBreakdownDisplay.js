import React from "react";

export default function DrinksBreakdownDisplay({ session }) {

 // Filter down the session object into just hte drinks values
  const trimmedDrinks = (({ wine, beer, cider, spirit, alcopop }) => ({
    wine,
    beer,
    cider,
    spirit,
    alcopop,
  }))(session);

  // Function that removes any null entries from the object (REFACTOR!)
  function trimToDrinks(trimmedDrinks) {
    let entries = Object.entries(trimmedDrinks);
    let finalTrim = [];
    for (let entry of entries) {
        console.log("entry", entry)
      if (entry[1] !== 0) {
        finalTrim.push(entry);
      }
    }
    console.log("final trime object:", Object.fromEntries(finalTrim));
    return Object.fromEntries(finalTrim);
  }

  const drinks = trimToDrinks(trimmedDrinks);
  return <div>Here are your drinks:</div>;

  
}
