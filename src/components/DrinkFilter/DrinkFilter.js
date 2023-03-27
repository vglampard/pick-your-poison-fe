// import React, { useCallback, useEffect, useState } from "react";
// import SessionFilter from "./SessionFilter";

// export default function DrinkFilter({ sessionsResults }) {


//   const DRINK_TYPES = ["wine", "beer", "cider", "spirit", "alcopop"];

//   const [state, setState] = useState({
//     sessions: sessionsResults,
//     filters: new Set(),
//   })

// const handleFilterChange = useCallback(event => {
//     setState(previousState => {
//       let filters = new Set(previousState.filters)
//       let sessions = sessionsResults
      
//       if (event.target.checked) {
//         filters.add(event.target.value)
//       } else {
//         filters.delete(event.target.value)
//       }
      
//       if (filters.size) {
//         sessions = sessions.filter(session => {
//           return filters.has(session.drinkType)
//         })
//       }
      
//       return {
//         filters,
//         sessions,
//       }
//     })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [setState])
  


//   return (
//     <div>
//       <SessionFilter drinkTypes={DRINK_TYPES} onFilterChange = {handleFilterChange}/>
//       {/* HERE SUPPOSED TO DO EOMTHING LIKE RENDER ACTUAL RESULTS, WHERE SESSIONSrESULTS = STATE.SESSIONS */}
//     </div>
//   );
// }
