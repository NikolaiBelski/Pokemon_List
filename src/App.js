import { useState,useEffect } from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import {Pokemon} from './components/Pokemon';
import{AllPokemons} from './components/AllPocemons'


function App() {
  
  const [pokemonBase,setPokemonBase] = useState([]);
  

  let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`;

useEffect(()=>{
  fetch(url).then(elem => elem.json()).then(elem => setPokemonBase(elem.results)).catch(er=> console.log('sdvadfgsdfgdfgsdfgfgfsdgfsdg' , er));
  
},[url]);


  return (

    <div className="appContainer">
      <h1>Каталог покемонов</h1>

      <Routes>
        <Route path='/' element = {<AllPokemons pokemons = {pokemonBase}/>}/>
        <Route path='/:id' element = {<Pokemon pokemon = {pokemonBase}/>}/>
     </Routes>
    </div>
  )
}

export default App;
