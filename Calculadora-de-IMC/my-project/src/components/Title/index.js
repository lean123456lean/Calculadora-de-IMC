
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o cálculo do seu IMC e descubra o caminho para um estilo de vida mais saudável!</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    width: 350,
    padding: 17,
    fontSize: 13,
    fontWeight: 'bold',
    backgroundColor: '#C5DFC8',
    borderRadius:3,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default Title;