import React from "react";
import Result from "../Result/Result";

export default function ResultsDisplay({ sessionResults }) {
  function calculateOverall(session) {
    return Math.round(
      (session.fatigue + session.headache + session.nausea) / 3
    );
  }

  function getDate(date) {
    return date.substring(0, 10);
  }

  return (
    <div>
      {sessionResults.map((session) => {
        return <Result getDate={getDate} calculateOverall={calculateOverall} session = {session}/>;
      })}
    </div>
  );
}
