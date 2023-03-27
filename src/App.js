import "./App.css";
import DrinksInput from "./components/drinksInput/drinksInput";
import { useState, useEffect } from "react";
import ResultsDisplay from "./components/resultsDisplay/resultsDisplay";
import axios from "axios";
import Banner from "./components/Banner/Banner";
import { toggleState, getWorstHangover } from "./utils/utils";

function App() {
  const [worstHangover, setWorstHangover] = useState({});
  const [sessionsResults, setSessionsResults] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [seeInput, setSeeInput] = useState(false);
  const [newSession, setNewSession] = useState("");
  let buttontext = seeAll ? "- HIDE HANGOVERS" : "+ SEE HANGOVERS";

  // TEST load all sessions on mount
  // have removed sessionsResults as a dependency
  useEffect(() => {
    getSessions();
    console.log("ALL DATA:", sessionsResults);
    setWorstHangover(getWorstHangover(sessionsResults));
  }, []);

  //AXIOS function that pulls all sessions data
  async function getSessions() {
    const res = await axios.get(
      "https://pick-your-poison-backend.onrender.com/api/sessions"
    );
    setSessionsResults(res.data.payload);
  }

  // function that posts new session to db
  const postNewSession = async (session) => {
    const newSession = await axios.post(
      "https://pick-your-poison-backend.onrender.com/api/sessions",
      session
    );
    console.log("NEWSESSIONS:", newSession)
    setSessionsResults([...sessionsResults, newSession]);
  };

  
  return (
    <div className="App">
      <header className="pb-20 min-h-[100vh] bg-slate-500 flex flex-col items-center">
        <Banner />
        <button onClick={()=>toggleState(setSeeInput, seeInput)}>+ ADD NEW SESSION</button>
        {seeInput && (
          <DrinksInput
            setNewSessionState={setNewSession}
            postNewSession={postNewSession}
          />
        )}
        <button onClick={()=>toggleState(setSeeAll, seeAll)}>{buttontext}</button>
        {seeAll && (
          <ResultsDisplay
            sessionsResults={sessionsResults}
            worstHangover={worstHangover}
          />
        )}
      </header>
    </div>
  );
}

export default App;
