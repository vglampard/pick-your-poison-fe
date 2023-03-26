import React from "react";
import wine from "./wine.png";
import cider from "./cider.png";
import beer from "./beer.png";
import spirit from "./spirit.png";
import alcopop from "./alcopop.png";

export default function DrinkBreakdown({ drink, amount }) {
  // Drink sources object
  const imageSources = {
    cider,
    beer,
    wine,
    spirit,
    alcopop,
  };

  // Generic function that pushes correct number of icons into array for rendering
  function renderAllIcons(drink, amount) {
    let content = [];
    for (let i = 0; i < amount; i += 1) {
      content.push(
        <img
          className="h-15 w-10"
          src={imageSources[drink]}
          alt={drink}
          aria-label={drink}
        />
      );
    }
    return content;
  }

  return <div className="flex flex-wrap">{renderAllIcons(drink, amount)}</div>;
}
