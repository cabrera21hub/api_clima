import {  StyleSheet, Text,  View } from 'react-native';
import Clima from './Componentes/clima';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Clima/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007ACC',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{

  },
  cuerpo:{
    flex:1,
    padding:11,
  },

  
});