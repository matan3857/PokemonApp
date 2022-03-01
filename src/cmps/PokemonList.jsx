import { PokemonPreview } from './PokemonPreview'

export function PokemonList({ pokemons }) {

    return (
        <div className="pokemons-list flex wrap">
            {pokemons.map((pokemon, idx) => {
                return <PokemonPreview
                    key={pokemon.name}
                    pokemon={pokemon}
                    idx={idx + 1}
                />
            })}
        </div>
    )
}
