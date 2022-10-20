import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

export const Pokemon = () => {

  const [pokemon, setPokemon] = useState();
  const navigate = useNavigate()

  let log = useLocation().pathname;


  let url = `https://pokeapi.co/api/v2/pokemon${log}`;

  useEffect(()=>{
  fetch(url)
  .then(elem => elem.json())
  .then(elem => setPokemon(elem))
  .catch(er=> console.log(er));
  
},[log]);


 
    return (
 <div>
     <h1 style={{color:'red'}}>{pokemon?.name}</h1>

     <div className="imageContainer">
         <img alt={pokemon?.name}
              src={pokemon?.sprites.other.dream_world.front_default} />
     </div>
     <div>
        <button onClick={()=>navigate('/')}>На главную</button>
        {pokemon?.id > 1 &&
        
        <button onClick={()=>navigate(`/${pokemon.id-1}`)}>Назад</button>
        }

        {pokemon?.id < 151 && 
        <button onClick={()=>navigate(`/${pokemon.id+1}`)}>Вперед</button>}
     </div>



 </div>
    )
}