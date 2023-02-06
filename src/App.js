import './App.css';
// NB maybe do this for roboto fonts? npm install @fontsource/roboto
import DrinksInput from './components/drinksInput/drinksInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> Pick your poison...</h1>
    
      <DrinksInput/>
      </header>
     
    </div>
  );
}

export default App;
