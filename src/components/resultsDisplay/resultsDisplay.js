import React, { useState } from "react";
import Result from "../Result/Result";
// import DrinkFilter from "../DrinkFilter/DrinkFilter";
import { getDate } from "../../utils/utils";
// import Metrics from "../Metrics/Metrics";

export default function ResultsDisplay({ sessionsResults, worstHangover }) {
  // const [filterResults, setFilterResults] = useState(false);
  
  // funciton that toggles visibility of 'filter by culprit' section
  // function handleClickFilter() {
  //   setFilterResults(!filterResults);
  // }
  return (
    <div className="grid w-5/6 grid-cols-1 gap-2 m-5 md:grid-cols-2 lg:grid-cols-3">
      {/* <button onClick={handleClickFilter}>FILTER BY CULPRIT</button> */}
      {sessionsResults === [] && <p>Loading...</p>}
      {/* {filterResults && <DrinkFilter sessionsResults={sessionsResults} />} */}
      {sessionsResults.map((session) => {
        return <Result getDate={getDate} session={session} />;
      })}
    </div>
  );
}
