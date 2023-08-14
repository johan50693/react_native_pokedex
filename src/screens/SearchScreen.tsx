/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, Platform, Dimensions} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import {styles as globalStyles } from '../theme/appTheme';
import { FlatList } from 'react-native';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const { isfetching,simplePokemonList} = usePokemonSearch();
  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {

    if (term.length === 0){
      return setPokemonFiltered([]);
    }

    if ( isNaN( Number(term))){

      setPokemonFiltered(
        simplePokemonList.filter(
          (poke) => poke.name.toLowerCase()
                              .includes(term.toLowerCase())
        )
      );
    } else {
      const pokemonbyid = simplePokemonList.find(poke => poke.id === term);
      setPokemonFiltered(
         (pokemonbyid) ? [pokemonbyid] : []
      );
    }

  }, [term]);

  if ( isfetching ){
    return (<Loading />);
  }
  return (
          <View style={{
            flex: 1,
            // marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20,
          }}>
            <SearchInput
              onDebounce= {(value) => setTerm(value)}
              style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth - 40,
                top: (Platform.OS === 'ios') ? top : top + 30,
              }} />

            <FlatList
              data={pokemonFiltered}
              keyExtractor={ (pokemon) => pokemon.id }
              showsVerticalScrollIndicator={false}
              numColumns={2}
              // Header
              ListHeaderComponent={(
                <Text style={{
                  ...globalStyles.title,
                  ...globalStyles.globalMargin,
                  paddingBottom: 10,
                  marginTop: top + 80,
                }}>
                  {term}
                </Text>
              )}

              renderItem={ ({item}) => (<PokemonCard pokemon={item} />)}

            />
          </View>
  );
};

