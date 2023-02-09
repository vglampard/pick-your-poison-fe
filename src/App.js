import './App.css';
import DrinksInput from './components/drinksInput/drinksInput';
import { useState, useEffect } from "react";
import ResultsDisplay from './components/resultsDisplay/resultsDisplay';


function App() {
const [newSessionState, setNewSessionState] = useState({})
const [sessionsResults, setSessionsResults] = useState([])

// TEST load all sessions on mount
useEffect(()=> {
  getSessions();
}, []);

// function that pulls complete session data from db
async function getSessions(){
  console.log("initial frtch")
  const sessions = await fetch('https://pick-your-poison-backend.onrender.com/api/sessions', {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await sessions.json();
    console.log("data from backend", data.payload)
    setSessionsResults(data.payload)
}

// functino that posts new session to db
const postNewSession = async (session) => {
  const resources = await fetch(`https://pick-your-poison-backend.onrender.com/api/sessions`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(session),
  });
  const data = await resources.json();
  console.log("data succcessfully poted:", data)
};

  return (
    <div className="App">
      <header className="App-header">
      <h1> What's your poison?</h1>
    <button onClick={getSessions}>get sessions</button>
      <DrinksInput setNewSessionState = {setNewSessionState} postNewSession = {postNewSession}/>
      <ResultsDisplay sessionResults = {sessionsResults}/>
      </header>
     
    </div>
  );
}

export default App;
