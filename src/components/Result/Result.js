import React, { useState } from "react";
import DrinksBreakdownDisplay from "../DrinksBreakdownDisplay/DrinksBreakdownDisplay";
import Graph from "../Graph/Graph";
import { calculateOverall,deleteSession, getDate } from "../../utils/utils";
import deleteIcon from "./delete.png"

export default function Result({ session, getDate }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  function handleClick() {
    setShowBreakdown(!showBreakdown);
  }
  let average = calculateOverall(session);
  return (
    <div className="bg-slate-100 w-full flex flex-col p-2 text-sm rounded">
      <div className="flex justify-between gap-2">
        <div>
          <p>{average}</p>
        </div>
        <div className="flex">
          {/* <h3 className="">😔{getDate(session.date)}</h3> */}
          <button
            onClick={handleClick}
            className="rounded-full bg-slate-200 w-5 outline-1 drop-shadow"
          >
            {" "}
            ?{" "}
          </button>
          <img src={deleteIcon} alt="button to delete session" onClick={()=>deleteSession(session)} className="h-8 w-3"/>
        </div>
      </div>
      {showBreakdown && (
        <div className="flex items-center gap-2 justify-between m-2">
          <h3 className="">😔{getDate(session.date)}</h3>

          <Graph session={session} />
          <DrinksBreakdownDisplay session={session} />{" "}
        </div>
      )}
    </div>
  );
}
