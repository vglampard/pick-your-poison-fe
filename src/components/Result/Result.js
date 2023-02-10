import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";

export default function Result({ session, calculateOverall, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  // State so user can toggle visibility of icon breakdown of drinks
  function handleClick() {
    setShowBreakdown(!showBreakdown);
  }

  return (
    <>
      <h3>😔{getDate(session.date)}</h3>
      <p>
        {" "}
        Hangover overall score: {calculateOverall(session)} <br></br> Nausea:{" "}
        {session.nausea}. Headache: {session.headache}. Fatigue:{" "}
        {session.fatigue}
      </p>
      <button onClick={handleClick}>What drinks? </button>
      {showBreakdown && <DrinksBreakdownDisplay session={session} />}
    </>
  );
}
