import React from 'react'
import wine from "./wine.png"
import cider from "./cider.png"
import beer from "./beer.png"
import spirit from "./spirit.png"
import alcopop from "./alcopop.png"
import styles from "./DrinkBreakdown"

export default function DrinkBreakdown({drink, amount}) {


    function renderAllIcons(drink, amount){
          let content = [];
          for (let i = 0; i < amount; i += 1) {
            content.push(<img src={wine} alt={drink} aria-label={drink} style={{width: "20px"}}/>);
            console.log("icon added")
          }
          return content;
        }
      

  return (
    <div>    {renderAllIcons(drink, amount)}</div>
  )
}
