import './App.css';
import DrinksInput from './components/drinksInput/drinksInput';
import { useState, useEffect } from "react";
import resultsDisplay from './components/resultsDisplay/resultsDisplay';


function App() {
const [newSessionState, setNewSessionState] = useState({})
const [sessionResults, setSessionResults] = useState({})

// TEST load all sessions on mount
useEffect(()=> {
  getSessions();
}, []);

async function getSessions(){
  const sessions = await fetch('https://pick-your-poison-backend.onrender.com/api/sessions', {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await sessions.json();
    console.log("data from backend", data.payload[0])
    setSessionResults(data.payload[0])
}


  return (
    <div className="App">
      <header className="App-header">
      <h1> What's your poison?</h1>
    <button onClick={getSessions}>get sessions</button>
      <DrinksInput setNewSessionState = {setNewSessionState}/>
      <resultsDisplay sessionResults = {sessionResults}/>
      </header>
     
    </div>
  );
}

export default App;
