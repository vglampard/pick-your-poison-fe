import React, {useState} from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";

export default function Result({ session, calculateOverall, getDate }) {
    const [showBreakdown, setShowBreakdown] = useState(false)

function handleClick (){
    setShowBreakdown(!showBreakdown)
}

  return (
    <>
      <h3>Your {getDate(session.date)} Hangover</h3>
      <p>
        {" "}
        Hangover overall score: {calculateOverall(session)} <br></br> Nausea:{" "}
        {session.nausea}. Headache: {session.headache}. Fatigue:{" "}
        {session.fatigue}
      </p>
      <button onClick={handleClick}></button>
      {showBreakdown && <DrinksBreakdownDisplay/>}
    </>
  );
}
