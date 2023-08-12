/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { pokemonapi } from '../api/pokemonApi';

export const usePokemon = ( id: string) => {

  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFull>({} as PokemonFull);

  const loadPokemon = async () => {
    const resp = await pokemonapi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemon(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
      isLoading,
      pokemon,
  };
};
