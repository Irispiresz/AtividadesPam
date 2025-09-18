import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TelaOpcoes = ({ navigation }) => (
  <View style={styles.container}>
    <Ionicons name="settings-outline" size={64} color="#555" />
    <Text style={styles.textoTelaSimples}>Tela de Opções</Text>
    <Text style={styles.descricaoTelaSimples}>
      Aqui você poderá configurar suas preferências.
    </Text>

    <View style={styles.botoesContainer}>
      <View style={styles.botaoWrapper}>
        <Button
          title="Ir para Tela Inicial"
          onPress={() => navigation.navigate('Itens')}
          color="#002761"
        />
      </View>
      <View style={styles.botaoWrapper}>
        <Button
          title="Ir para Meu Perfil"
          onPress={() => navigation.navigate('Perfil')}
          color="#002761"
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  textoTelaSimples: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  descricaoTelaSimples: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  botoesContainer: {
    marginTop: 20,
    width: '90%',
  },
  botaoWrapper: {
    marginVertical: 10,
  },
});

export default TelaOpcoes;
