//import logo from './logo.svg';
import './App.css';
import NavBar from './komponente/NavBar';
import Proizvodi from './komponente/Proizvodi';
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Cart from './komponente/Cart';
import Cenovnik from './komponente/Cenovnik';

function App() {

  function Dodaj(title,id){
    setcartNum(cartNum+1);
    products.forEach((prod) => {
      if(prod.id===id){
        prod.amount++;
      }
      console.log(prod.amount);
    });
  
}


function Oduzmi(title){
  if(products.amount>0){
  setcartNum(cartNum-1);
  }else{
    alert("Brojac je vec na nuli!");
  }
}
  return (
    <BrowserRouter className="App">
     
    <Routes>
    <NavBar cartNum={cartNum}></NavBar>
 
    </Routes>
    <Route path="/" element={ <Proizvodi products={products} Dodaj={Dodaj} Oduzmi={Oduzmi}/>}/>

    <Route path="/cart" element={ <Cart products={products}/> }/>
    <Route path="/cenovnik" element={ <Cenovnik/> }/>      
      </BrowserRouter>
  );
}

export default App;
