import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const dados = [
  {
    id: '1',
    title: 'Ariana Grande',
    caminho: require('../assets/ariana.png'), // Verifique o caminho
    desc: 'Ariana Grande-Butera é uma cantora, compositora e atriz norte-americana.',
  },
  {
    id: '2',
    title: 'Bruno Mars',
    caminho: require('../assets/BrunoMars.png'), // Verifique o caminho
    desc: 'Peter Gene Hernandez, mais conhecido pelo nome artístico Bruno Mars, é um cantor, compositor, músico e dançarino americano.',
  },
  {
    id: '3',
    title: 'The Weeknd',
    caminho: require('../assets/theweeknd.png'), // Verifique o caminho
    desc: 'Abel Makkonen Tesfaye, mais conhecido por seu nome artístico The Weeknd, é um cantor, compositor, ator e produtor musical canadense.',
  },
  {
    id: '4',
    title: 'Lady Gaga',
    caminho: require('../assets/ladygaga.png'), // Verifique o caminho
    desc: 'Stefani Joanne Angelina Germanotta, conhecida pelo nome artístico Lady Gaga, é uma cantora, compositora e atriz norte-americana.',
  },
  {
    id: '5',
    title: 'Adele',
    caminho: require('../assets/adele.png'), // Verifique o caminho
    desc: 'Adele Laurie Blue Adkins MBE é uma cantora, compositora e multi-instrumentista britânica.',
  },
];

const TelaLista = () => {
  const renderItem = ({ item }) => (
    <LinearGradient colors={['#5a88d1', '#011c47']} style={styles.itemLista}>
      <Text style={styles.itemTitulo}>{item.title}</Text>
      <View style={styles.imagemContainer}>
        <Image source={item.caminho} style={styles.imagem} />
      </View>
      <Text style={styles.desc}>{item.desc}</Text>
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#d9e7fa',
  },
  flatListContent: {
    paddingHorizontal: 90,
    paddingBottom: 20,
  },
  itemLista: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  itemTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f7faff',
    textAlign: 'center',
    marginBottom: 5,
  },
  imagem: {
    width: 130,
    height: 140,
    borderRadius: 8,
  },
  imagemContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  desc: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default TelaLista;
