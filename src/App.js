import "./App.css";
import DrinksInput from "./components/drinksInput/drinksInput";
import { useState, useEffect } from "react";
import ResultsDisplay from "./components/resultsDisplay/resultsDisplay";
import axios from "axios";
import logo from "./logo.png";

function App() {
  const [newSessionState, setNewSessionState] = useState({});
  const [sessionsResults, setSessionsResults] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [seeInput, setSeeInput] = useState(false);
  let buttontext = seeAll ? "HIDE HANGOVERS" : "SEE HANGOVERS";

  // TEST load all sessions on mount
  useEffect(() => {
    getSessions();
    // console.log("ALL DATA:", sessionsResults);
  }, [sessionsResults]);

  //AXIOS function that pulls all sessions data
  async function getSessions() {
    const res = await axios.get(
      "https://pick-your-poison-backend.onrender.com/api/sessions"
    );
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
    console.log("new session post fired")
    const newSession = await axios.post(
      "https://pick-your-poison-backend.onrender.com/api/sessions",
      session
    );
    console.log("data succcessfully poted:", newSession);
    setSessionsResults([...sessionsResults, newSession])
    console.log("NEW SESSIONS:", sessionsResults)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="skull glass" />
        <div>
          <h1> What's your poison?</h1>
          <h6>Keep track of which combos hit you hardest!</h6>
        </div>
        <button onClick={handleClickSeeInput}>ADD NEW SESSION</button>
        {seeInput && (
          <DrinksInput
            setNewSessionState={setNewSessionState}
            postNewSession={postNewSession}
          />
        )}
        <button onClick={handleClickSeeAll}>{buttontext}</button>
        {seeAll && <ResultsDisplay sessionsResults={sessionsResults} />}
    
      </header>
    </div>
  );
}

export default App;
