import React, { useState, useEffect } from "react";
import { PokemonList } from '../cmps/PokemonList';
import { LoaderSpinner } from "../cmps/LoaderSpinner"
import pokemonLogo from '../assets/img/pokemon.png'


export function Homepage(props) {
  const [pokemons, setPokemons] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=500")
        .then(res => res.json())
        .then(data => setPokemons(data.results))
    }
    if (!pokemons) fetchData()
  }, []);

  const handleChange = (ev) => {
    setSearch(ev.target.value)
  }

  console.log('pokemons', pokemons)

  if(!pokemons) return <LoaderSpinner/>

  const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="home-page flex column align-center">
      <img src={pokemonLogo} alt="logo" />
      {!pokemons ?
        <LoaderSpinner />
        :
        <>
          <input
            className='search'
            type='search'
            value={search}
            placeholder='Search Pokemon'
            onChange={handleChange}
          />
          <PokemonList pokemons={fileteredPokemons} />
        </>
      }
    </section>
  )
}