import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";

export default function Result({ session, calculateOverall, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  // State so user can toggle visibility of icon breakdown of drinks
  function handleClick() {
    setShowBreakdown(!showBreakdown);
  }

  return (
    <div className="bg-red-200 text-sm rounded">
      <h3 className="font-bold">😔{getDate(session.date)}</h3>
      <div className="flex flex-col">
        {" "}
        <p>Hangover overall score: {calculateOverall(session)} </p>
        <p> Nausea: {session.nausea}.</p> <p>Headache: {session.headache}. </p>{" "}
        <p>Fatigue: {session.fatigue}</p>
      </div>
      <button onClick={handleClick}>WYP? </button>
      {showBreakdown && <DrinksBreakdownDisplay session={session} />}
    </div>
  );
}
