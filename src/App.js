import "./App.css";
import DrinksInput from "./components/drinksInput/drinksInput";
import { useState, useEffect } from "react";
import ResultsDisplay from "./components/resultsDisplay/resultsDisplay";
import axios from "axios";
import Metrics from "./components/Metrics/Metrics";
import Banner from "./components/Banner/Banner";
import Graph from "./components/Graph/Graph";

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
    console.log("getsessions fired");

    const res = await axios.get(
      "https://pick-your-poison-backend.onrender.com/api/sessions"
    );
    // console.log("DATA FROM FETCH:", res.data.payload);
    setSessionsResults(res.data.payload);
  }

  function handleClickSeeAll() {
    setSeeAll(!seeAll);
  }

  function handleClickSeeInput() {
    setSeeInput(!seeInput);
  }

  // functino that posts new session to db
  const postNewSession = async (session) => {
    // console.log("new session post fired")
    const newSession = await axios.post(
      "https://pick-your-poison-backend.onrender.com/api/sessions",
      session
    );
    // console.log("data succcessfully poted:", newSession);
    setSessionsResults([...sessionsResults, newSession]);
    console.log("NEW SESSIONS:", sessionsResults);
  };

  function getWorstHangover(sessionsResults) {
    let worst = {};
    let max = 0;
    for (let i = 0; i < sessionsResults.length; i++) {
      let sesh = sessionsResults[i];
      let hangoverAverage = (sesh.fatigue + sesh.headache + sesh.nausea) / 3;
      if (hangoverAverage > max) {
        max = hangoverAverage;
        worst = sesh;
      }
    }
    console.log("WORST:", worst);
    return worst;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner/>
        <button onClick={handleClickSeeInput}>+ ADD NEW SESSION</button>
        {seeInput && (
          <DrinksInput
            setNewSessionState={setNewSession}
            postNewSession={postNewSession}
          />
        )}
       {/* <Graph session={sessionsResults[0]} className=""/> */}
        <button onClick={handleClickSeeAll}>{buttontext}</button>
        {seeAll && <ResultsDisplay sessionsResults={sessionsResults} worstHangover={worstHangover}/>}
        {/* {worstHangover !== {} && <Metrics worstHangover={worstHangover} />} */}
      </header>
    </div>
  );
}

export default App;
