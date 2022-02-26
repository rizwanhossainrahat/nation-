import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
 const[countries,setCountries]= useState([])
 const [cart,setCart]=useState([])
 useEffect(()=>{
   fetch('https://restcountries.com/v2/all')
   .then(res=>res.json())
   .then(data=>setCountries(data))
 },[])
//  props.handleAddCountry recive korar jonno akta perameter nite hobe 
// eventhandeler j jaigai ase state ta oi jaigai use kora better
 const handleAddCountry=(country)=>{
  //  ... holo j ager data ta load korar jonno r country ta holo click korle jeta add hobe tar jonno
  // nicher line tar mane holo puran gulo boshlo notun akta add holo
   const newCart=[...cart,country]
   setCart(newCart)
 }
  return (
    <div className="App">
      <h1>country length:{countries.length}</h1>
      <h4>country added:{cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>
        {
          countries.map(country=><Country country={country} handleAddCountry={handleAddCountry}  key={country.alpha3Code}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
