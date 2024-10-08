
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Form from '../Form';

const Main = () => {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default Main;


