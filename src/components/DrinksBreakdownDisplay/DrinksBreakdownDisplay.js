import React from "react";

export default function DrinksBreakdownDisplay({ session }) {
  const trimmedDrinks = (({ wine, beer, cider, spirit, alcopop }) => ({
    wine,
    beer,
    cider,
    spirit,
    alcopop,
  }))(session);

  // break object into entries array
  // for each one, if entry[0] === wine, beer, cider, spirit, alcopop AND if entry[1] !== 0: push that item into new array
  // make object from those kvs

// alt : could use recursion to pop the last one off if it fails to meeet condition? 

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

    return finalTrim;
  }

  trimToDrinks(trimmedDrinks);
  return <div>Here are your drinks. </div>;
}
