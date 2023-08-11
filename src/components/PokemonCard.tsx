/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { TouchableOpacity } from 'react-native-gesture-handler';

const windowsWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
    >
      <View style={{
        ...styles.cardContainer,
        width: windowsWidth * 0.44,
        }}>
          {/* Nombre del pokemon y ID */}
          <View>
            <Text style={{...styles.name}}>
              {pokemon.name}
              { '\n#' + pokemon.id}
            </Text>
          </View>
        {/* <FadeInImage
          uri={item.picture}
          style= {{
            width: 100,
            height: 100,
          }}
        /> */}
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    cardContainer: {
      marginHorizontal: 10,
      backgroundColor: 'red',
      height: 120,
      width:160,
      marginBottom: 25,
      borderRadius: 10,
    },
    name: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      top:20,
      left:10,
    },
});
