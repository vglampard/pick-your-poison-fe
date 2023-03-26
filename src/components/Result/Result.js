import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";
import Graph from "../Graph/Graph";
import { getGraphArray } from "../../utils/utils";
export default function Result({ session, calculateOverall, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);


  function handleClick() {
    setShowBreakdown(!showBreakdown);
  }

  console.log("DID IT WORK:", getGraphArray(session));
  return (
    <div className="bg-red-200 text-sm rounded">
      <h3 className="font-bold">😔{getDate(session.date)}</h3>
      <div className="flex flex-col"></div>

      <button onClick={handleClick}>WYP? </button>
      {showBreakdown && (
        <div className="flex flex-col items-center m-2">
          <Graph session={session} />
          <DrinksBreakdownDisplay session={session} />{" "}
        </div>
      )}
    </div>
  );
}
