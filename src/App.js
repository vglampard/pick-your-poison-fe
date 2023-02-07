import './App.css';
// NB maybe do this for roboto fonts? npm install @fontsource/roboto
import DrinksInput from './components/drinksInput/drinksInput';
// import { FormDemo } from './components/TestForm/testForm';
import { useState } from "react";

function App() {
const [newSessionState, setNewSessionState] = useState({})



  return (
    <div className="App">
      <header className="App-header">
      <h1> Pick your poison...</h1>
    
      <DrinksInput setNewDrinkState = {setNewSessionState}/>

      </header>
     
    </div>
  );
}

export default App;
