import React from "react";
import wine from "./wine.png";
import cider from "./cider.png";
import beer from "./beer.png";
import spirit from "./spirit.png";
import alcopop from "./alcopop.png";

export default function DrinkBreakdown({ drink, amount }) {
  // Drink sources object
  const imageSources = {
    cider: { cider },
    beer: { beer },
    wine: { wine },
    spirit: { spirit },
    alcopop: { alcopop },
  };

  // Generic function that pushes correct number of icons into array for rendering
  function renderAllIcons(drink, amount) {
    let content = [];
    for (let i = 0; i < amount; i += 1) {
      content.push(
        <img
          src={imageSources[drink][drink]}
          alt={drink}
          aria-label={drink}
          style={{ width: "7vw" }}
        />
      );
    }
    return content;
  }

  return <div> {renderAllIcons(drink, amount)}</div>;
}
