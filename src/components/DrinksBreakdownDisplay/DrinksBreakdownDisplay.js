import React from "react";
import { trimToDrinks, createRundown } from "../../utils/utils";
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

  // Remove any k/v pair for which 0 drinks were consumed
  const drinks = trimToDrinks(trimmedDrinks);

  // Create rundown to display in tooltip 
  let rundown = createRundown(drinks)

  return (
    <div className="flex">
      {/* ### Tooltip start */}
      <div class="container mx-auto py-5">
        <div class=" flex flex-wrap justify-center">
          <div class="w-full sm:w-1/2 lg:w-1/4">
            <div class="">
              <div class="group relative inline-block">
                {/* Map over drinks array and for each render a component displaying the correct number of icons of that drink */}
                <>
                  {drinks.map((drink) => {
                    return (
                      <DrinkBreakdown drink={drink[0]} amount={drink[1]} />
                    );
                  })}
                </>
                <div class="absolute top-full left-1/2 z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded bg-black py-[6px] px-4 text-sm font-semibold text-white opacity-0 group-hover:opacity-100">
                  <span class="absolute top-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black"></span>
                  <p>{rundown}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /// Tooltip end */}
    </div>
  );
}
