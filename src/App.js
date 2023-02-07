import './App.css';
// NB maybe do this for roboto fonts? npm install @fontsource/roboto
import DrinksInput from './components/drinksInput/drinksInput';
// import { FormDemo } from './components/TestForm/testForm';
import { useState, useEffect } from "react";

function App() {
const [newSessionState, setNewSessionState] = useState({})
const [sessionResults, setSessionResults] = useState({})

// TEST load all sessions on mount
// useEffect(()=> {
//   const getSessions = async (obj) => {
//     const sessions = await fetch('https://pick-your-poison-backend.onrender.com/api/sessions', {
//       method: "GET", 
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     const data = await sessions.json();
//     console.log("data from backend", data)
//     setSessionResults(data)
//   };
//   getSessions();
// }, [sessionResults]);

async function getSessions(){
  const sessions = await fetch('https://pick-your-poison-backend.onrender.com/api/sessions', {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await sessions.json();
    console.log("data from backend", data.payload[0])
}


  return (
    <div className="App">
      <header className="App-header">
      <h1> Pick your poison...</h1>
    <button onClick={getSessions}>get sessions</button>
      <DrinksInput setNewSessionState = {setNewSessionState}/>

      </header>
     
    </div>
  );
}

export default App;
