import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Components/Header';
import Deputados from './Components/ListaDeputados';

export default function App() {
  return (
    <>
    <Header />
    <Deputados/>
    </>
  );
}


