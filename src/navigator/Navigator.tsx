/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Pokemonscreen } from '../screens/PokemonScreen';
import React from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined,
  Pokemonscreen: { simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Pokemonscreen" component={Pokemonscreen} />
    </Stack.Navigator>
  );
};
