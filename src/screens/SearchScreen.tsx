/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Platform, ActivityIndicator, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { PokemonCard } from '../components/PokemonCard';
import {styles as globalStyles } from '../theme/appTheme';
import { FlatList } from 'react-native';

export const SearchScreen = () => {

  const {top} = useSafeAreaInsets();
  const { isfetching,simplePokemonList} = usePokemonSearch();

  if ( isfetching ){
    return (
      <View style={styles.activityContainer} >
        <ActivityIndicator
          size={50}
          color="grey"
        />
        <Text>Cargando...</Text>
      </View>
    );
  }
  return (
          <View style={{
            flex: 1,
            marginTop: (Platform.OS === 'ios') ? top : top + 10,
            marginHorizontal: 20,
          }}>
            <SearchInput />

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
                }}>
                  Pokedex
                </Text>
              )}

              renderItem={ ({item}) => (<PokemonCard pokemon={item} />)}

            />
          </View>
  );
};

const styles = StyleSheet.create({
    activityContainer: {
      flex: 1,
      // backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
});
