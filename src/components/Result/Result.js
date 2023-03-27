import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";
import Graph from "../Graph/Graph";

export default function Result({ session, calculateOverall, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  function handleClick() {
    setShowBreakdown(!showBreakdown);
  }

  let average = calculateOverall(session);

  return (
    <div className="bg-red-200 w-full flex p-2 text-sm rounded">
      <h3 className="">😔{getDate(session.date)}</h3>
      <div className="flex justify-end">
        <p>{average}</p>

        <button
          onClick={handleClick}
          className="rounded-full bg-red-100 w-5 outline-1 drop-shadow"
        >
          {" "}
          ?{" "}
        </button>
      </div>
      {showBreakdown && (
        <div className="flex items-center m-2">
          <Graph session={session} />
          <DrinksBreakdownDisplay session={session} />{" "}
        </div>
      )}
    </div>
  );
}
