import { Link } from "react-router-dom"

const createUrlArray = (link) => {
    return `/${link.split('/')[6]}`
}

export const AllPokemons = ({pokemons}) => {
   
    return (
        <>
            {
                pokemons?.map(elem => {

                    
                    return (
                <div className="pokemonRow" key={elem.name}>
                    <h3>Имя: {elem.name}</h3>
                    <Link to={createUrlArray(elem.url)} >описание: {elem.url}</Link>
                </div>
                    )
            })
                        
                    
            }
        </>
    )
}