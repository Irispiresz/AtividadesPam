import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import TelaLista from './components/TelaLista';
import TelaOpcoes from './components/TelaOpcoes';
import TelaPerfil from './components/TelaPerfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack Navigator para 'Itens'
const ItensStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaLista" component={TelaLista} />
    </Stack.Navigator>
  );
};

// Stack Navigator para 'Opções'
const OpcoesStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaOpcoes" component={TelaOpcoes} />
    </Stack.Navigator>
  );
};

// Stack Navigator para 'Perfil'
const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaPerfil" component={TelaPerfil} />
    </Stack.Navigator>
  );
};

// Função principal do App
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Itens') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            } else if (route.name === 'Opções') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',  // Cor ativa
          tabBarInactiveTintColor: 'gray',   // Cor inativa
        })}
      >
        <Tab.Screen
          name="Itens"
          component={ItensStackNavigator}
          options={{ tabBarLabel: 'Itens' }}
        />
        <Tab.Screen
          name="Opções"
          component={OpcoesStackNavigator}
          options={{ tabBarLabel: 'Opções' }}
        />
        <Tab.Screen
          name="Perfil"
          component={PerfilStackNavigator}
          options={{ tabBarLabel: 'Perfil' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
