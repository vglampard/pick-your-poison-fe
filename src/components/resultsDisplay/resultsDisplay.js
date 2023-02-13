import React, {useState} from "react";
import Result from "../Result/Result";
import DrinkFilter from "../DrinkFilter/DrinkFilter";

export default function ResultsDisplay({ sessionsResults }) {
  const [filterResults, setFilterResults] = useState(false);
  function calculateOverall(session) {
    return Math.round(
      (session.fatigue + session.headache + session.nausea) / 3
    );
  }

  function getDate(date) {
    return date.substring(0, 10);
  }

  // funciton that toggles visibility of 'filter by culprit' section
  function handleClickFilter() {
    setFilterResults(!filterResults);
  }

  return (
    <div>
          <button onClick={handleClickFilter}>FILTER BY CULPRIT</button>
          
        {filterResults && <DrinkFilter sessionsResults={sessionsResults} />}
      {sessionsResults.map((session) => {
        return <Result getDate={getDate} calculateOverall={calculateOverall} session = {session}/>;
      })}
    </div>
  );
}
