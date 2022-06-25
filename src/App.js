//import logo from './logo.svg';
import './App.css';
import NavBar from './komponente/NavBar';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";


function App() {


  return (
    <BrowserRouter className="App">
     
    <Routes>
    <NavBar cartNum={cartNum}></NavBar>
 
    </Routes>
     
      
      </BrowserRouter>
  );
}

export default App;
