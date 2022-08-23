import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Inputs from './src/Inputs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style ={ styles.texto}>Banco</Text>
      <Inputs/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 35,
    backgroundColor: '#cfffbc'
  },
  texto:{
    fontSize: 35,
    color: '#000000',
    
  }
});
