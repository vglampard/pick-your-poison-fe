import React, {useState} from "react";
import Result from "../Result/Result";
import DrinkFilter from "../DrinkFilter/DrinkFilter";
import { getDate } from "../../utils/utils";
import Metrics from "../Metrics/Metrics";
export default function ResultsDisplay({ sessionsResults, worstHangover }) {
  const [filterResults, setFilterResults] = useState(false);
  function calculateOverall(session) {
    return Math.round(
      (session.fatigue + session.headache + session.nausea) / 3
    );
  }

  // funciton that toggles visibility of 'filter by culprit' section
  function handleClickFilter() {
    setFilterResults(!filterResults);
  }

  return (
    <div className="flex gap-2 grid grid-cols-2">
          {/* <button onClick={handleClickFilter}>FILTER BY CULPRIT</button> */}
          
        {/* {filterResults && <DrinkFilter sessionsResults={sessionsResults} />} */}
      {sessionsResults.map((session) => {
        return <Result getDate={getDate} calculateOverall={calculateOverall} session = {session}/>;
      })}
      <Metrics worstHangover={worstHangover} />
    </div>
  );
}
