/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Platform, Dimensions} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import {styles as globalStyles } from '../theme/appTheme';
import { FlatList } from 'react-native';
import { Loading } from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const { isfetching,simplePokemonList} = usePokemonSearch();

  if ( isfetching ){
    return (<Loading />);
  }
  return (
          <View style={{
            flex: 1,
            // marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20,
          }}>
            <SearchInput style={{
              position: 'absolute',
              zIndex: 999,
              width: screenWidth - 40,
              top: (Platform.OS === 'ios') ? top : top + 30,
            }} />

            <FlatList
              data={simplePokemonList}
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
                  Pokedex
                </Text>
              )}

              renderItem={ ({item}) => (<PokemonCard pokemon={item} />)}

            />
          </View>
  );
};

