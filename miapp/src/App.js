import './App.css';
import  Clase  from './components/Clase';
import  Background  from './components/Background';
import  Raza  from './components/Raza';
import  Calculator  from './components/Calculator';


function App() {
  return (
    <div className="App">
        <h1>Eleccion de clase</h1>
        <Clase/>
        <hr/>
        <Raza/>
        <hr/>
        <Background/>
        <hr/>
        <Calculator/>
    </div>
  );
}

export default App;
