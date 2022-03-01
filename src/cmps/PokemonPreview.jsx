import React, { useState, useEffect } from "react";

export function PokemonPreview({ pokemon,idx }) {
   
    const [info, setInfo] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
          console.log(idx)
        fetch(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
          .then(res => res.json())
          .then(data => setInfo(data))
      }
      fetchData()
    }, []);
    console.log('pokemon',pokemon)
    console.log('info',info)
    console.log('##################')

    return (
        <div className="pokemon-card flex column">
            <a href={`https://www.pokemon.com/us/pokedex/${pokemon.name}`} target="_blank" rel="noreferrer">
                <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} />
                <h2>{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                <p className="pokemon-idx">#{idx}</p>
                {info && info.types &&
                <>
                {info.types.map(type => <p className={`type ${type.type.name}`}>{type.type.name}</p>)}
                </>
                }
            </a>
        </div>
    )
}

