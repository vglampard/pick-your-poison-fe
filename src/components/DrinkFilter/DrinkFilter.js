import React, { useCallback, useEffect, useState } from "react";
import SessionFilter from "./SessionFilter";

export default function DrinkFilter({ sessionsResults }) {
  const DRINK_TYPES = ["wine", "beer", "cider", "spirit", "alcopop"];

  // filter by drink
  // filter by overall severity

  return (
    <div>
      <SessionFilter drinkTypes={DRINK_TYPES}/>
    </div>
  );
}
