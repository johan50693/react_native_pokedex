/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.activityContainer} >
      <ActivityIndicator
        size={50}
        color="grey"
      />
      <Text>Cargando...</Text>
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

