/* eslint-disable prettier/prettier */
import { useEffect, useRef } from 'react';
import { pokemonapi } from '../api/pokemonApi';

export const usePokemonPaginated = () => {

  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {

    const resp = await pokemonapi.get(nextPageUrl.current);
    console.log(resp.data);

  };

  useEffect(() => {
    loadPokemons();
  }, []);

};
