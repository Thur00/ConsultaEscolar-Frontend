import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfessoresScreen from './screens/ProfessoresScreen';
import SalasScreen from './screens/SalaScreen';
import AlocacoesScreen from './screens/AlocacoesScreen';
import DetalhesScreen from './screens/DetalhesScreen';

// Cria uma instância do Stack Navigator
const Stack = createStackNavigator();

// Define o componente principal do aplicativo
export default function App() {
  return (
    // Envolve a navegação dentro do NavigationContainer
    <NavigationContainer>
      {/* Define o Stack Navigator com a rota inicial sendo "Home" */}
      <Stack.Navigator initialRouteName="Home">
        {/* Define a tela "Home" como parte do Stack Navigator */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Define a tela "Professores" como parte do Stack Navigator */}
        <Stack.Screen name="Professores" component={ProfessoresScreen} />
        {/* Define a tela "Salas" como parte do Stack Navigator */}
        <Stack.Screen name="Salas" component={SalasScreen} />
        {/* Define a tela "Alocações" como parte do Stack Navigator */}
        <Stack.Screen name="Alocações" component={AlocacoesScreen} />
        {/* Define a tela "Detalhes" como parte do Stack Navigator */}
        <Stack.Screen name="Detalhes" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};