import './App.css';
import Main from './Component/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello_World from './Component/Hello_World';
import Persons from './Component/Persons';
import Counter from './Component/Counter';
import UseEffect from './Component/UseEffect';
import { Link } from 'react-router-dom';
import Mains from './Component/Router/Mains';
function App() { 
  return (
    <div className="App">
      <Main/>
      <Hello_World/>
      <Persons name={"Abhinav"} age={22} />
      <Persons name={"Abhiran"} age={23} />
      <Persons name={"Adil"} age={19} />
      <Persons name={"Shebi"} age={25} />
      <Persons name={"Keerthana"} age={27} />
      <Persons name={"Sreeshma"} age={27} />
      <Persons name={"Maneesa"} age={26} />
      <Counter/>
      <UseEffect/>
      <Mains/>
      
    </div>
  );
}

export default App;
