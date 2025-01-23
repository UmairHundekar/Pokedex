import React, { useState, useEffect } from 'react';
import { fetchPokemonData } from '../api/pokemonService'; 
import MoveComponent from './MoveComponent';
import getTypeColor from '../utils/typeColors';
import StatsBar from './StatsBar';
import { getEvolutions } from '../utils/evolutionUtils';

const PokemonDataDisplay = ({ pokemonName }: { pokemonName: string }) => {
  const [pokemonData, setPokemonData]: [any, any] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { pokemonData, evolutionChain } = await fetchPokemonData(pokemonName);
      setPokemonData(pokemonData);
      setEvolutionChain(evolutionChain);
    };

    fetchData();
  }, [pokemonName]);

  if (!pokemonData || !evolutionChain) {
    return <div className='flex h-full justify-center items-center'>Loading...</div>;
  }

  if (pokemonData == "error" || evolutionChain == "error") {
    return <div className='flex h-full justify-center items-center'>Pokemon not found!</div>;
  }

  return (
    <div className="p-4 h-[55rem] grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center h-[90%]">
        <img
          className="max-w-72 mt-12"
          src={(pokemonData as any).sprites.other['official-artwork'].front_default}
          alt={(pokemonData as any).name}
        />
        <h2 className="text-xl font-semibold">{pokemonData.name}</h2>

        <div className="flex my-2">
          <span className="mr-4">ID: {(pokemonData as any).id}</span>
          <div className="flex">
            {pokemonData.types.map((type: { type: { name: string }; }, index: React.Key) => (
              <div
                key={index}
                className={`mr-2 px-2 py-1 text-white rounded ${getTypeColor(type.type.name)}`}>
                {type.type.name}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 px-4 py-2 shadow-md rounded">
          <h2 className="text-lg font-semibold mb-2">Stats</h2>
          <div className="grid grid-cols-2 sd:w-96 md:w-96 md:grid-cols-2 lg:w-96 lg:rid-cols-2 xl:w-96 xl:grid-cols-2 gap-2">
              <>
                <StatsBar statName="HP" statValue={pokemonData.stats[0].base_stat} />
                <StatsBar statName="Attack" statValue={pokemonData.stats[1].base_stat} />
                <StatsBar statName="Defense" statValue={pokemonData.stats[2].base_stat} />
                <StatsBar statName="Speed" statValue={pokemonData.stats[5].base_stat} />
                <StatsBar statName="Special Attack" statValue={pokemonData.stats[3].base_stat} />
                <StatsBar statName="Special Defense" statValue={pokemonData.stats[4].base_stat} />
              </>
          </div>
        </div>

        <div className="mt-4 bg-gray-100 rounded shadow-md">
          <h3 className="text-lg font-semibold">Evolutions:</h3>
          <ul>
            {getEvolutions((evolutionChain as any)?.chain).map((evolution, index) => (
              <li className="flex" key={index}>
                <img className="w-20 h-20 object-contain" src={evolution.sprite} alt={evolution.name} />
                <span>{evolution.name} (ID: {evolution.id})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      

      <div className="overflow-y-auto h-[100%] w-[95%]">
        <div className="flex flex-col gap-4">
          {pokemonData.moves.map((move: { move: { name: string}; }) => {
            return (
              <MoveComponent key={move.move.name as string} moveName={move.move.name as string} />
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default PokemonDataDisplay;