
import './App.css';
import { Counter } from './components/Counteer-UseState/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>No es una etapa mama</h1>
        <Counter initialValue={0}/>
        <Counter initialValue={100}/>
        
      </header>
    </div>
  );
}

export default App;
