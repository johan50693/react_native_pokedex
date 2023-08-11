/* eslint-disable prettier/prettier */
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import { RootStackParams } from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'Pokemonscreen'>{}

export const Pokemonscreen = ({navigation,route}: Props) => {

  const {simplePokemon, color} = route.params;
  return (
    <View>
      <Text> {simplePokemon.name} - {color} </Text>
    </View>
  );
};
