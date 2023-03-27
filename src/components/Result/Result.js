import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";
import Graph from "../Graph/Graph";
import {
  calculateOverall,
  deleteSession,
  toggleState,
} from "../../utils/utils";
import deleteIcon from "./delete.png";
import more from "./next.png";
import less from "./back.png";

export default function Result({ session, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  let average = calculateOverall(session);
  return (
    <div className="bg-slate-600 text-base drop-shadow-lg bg-opacity-50 w-full flex flex-col p-2 rounded">
      <div className="flex flex-row justify-between gap-2">
        <div className="flex items-center">
          <img
            src={deleteIcon}
            alt="button to delete session"
            onClick={() => deleteSession(session)}
            className="w-1/12 m-1"
          />
          <p className="text-slate-100 ">HANGOVER LEVEL - {average}</p>
        </div>
        <div className="flex justify-end">
         <img alt="show more or less content" className="w-1/4" src={showBreakdown ? less : more} onClick={() => toggleState(setShowBreakdown, showBreakdown)} />
          
        </div>
      </div>
      {showBreakdown && (
        <div className="flex items-center gap-2 justify-between m-2 p-2 bg-slate-200 rounded">
          <h3 className="">😔{getDate(session.date)}</h3>
          <Graph session={session} />
          <DrinksBreakdownDisplay session={session} />{" "}
        </div>
      )}
    </div>
  );
}
