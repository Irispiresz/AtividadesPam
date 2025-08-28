// ... imports mantidos
import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  FlatList,
  View,
  Modal,
  Alert,
  Dimensions,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Inicio = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');

  const botoes = [
    { nome: 'The Weeknd', rota: 'TelaWeeknd' },
    { nome: 'Avicii', rota: 'TelaAvicii' },
    { nome: 'Billie Eilish', rota: 'TelaBillie' },
    { nome: 'Lady Gaga', rota: 'TelaLadyGaga' },
    { nome: 'Conjunto de Cantores', rota: 'OutrosCantores' },
  ];

  const botoesFiltrados = botoes.filter((item) =>
    item.nome.toLowerCase().includes(nome.toLowerCase())
  );

  return (
    <SafeAreaView>
      <Text style={styles.titulo}>Cantores</Text>
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          placeholder="Digite o nome do botão"
          value={nome}
        />
        {botoesFiltrados.map((item, i) => (
          <Pressable
            key={i}
            onPress={() => navigation.navigate(item.rota)}
            style={styles.botao}>
            <Text>{item.nome}</Text>
          </Pressable>
        ))}
      </SafeAreaView>
    </SafeAreaView>
  );
};

// 1 
const TelaWeeknd = () => (
  <SafeAreaView style={styles.container}>
    <Image
      source={require('./assets/weeknd.jpg')}
      style={styles.imageCentralizada}
    />
    <View style={styles.caixaDescricao}>
      <Text style={styles.nomeArtista}>The Weeknd</Text>
      <Text style={styles.descricao}>
        The Weeknd é um dos maiores nomes do R&B moderno. Com hits como
        "Blinding Lights" e "Can't Feel My Face", ele tem sido um dos artistas
        mais influentes da década.
      </Text>
    </View>
  </SafeAreaView>
);

// 2 
const TelaAvicii = () => (
  <SafeAreaView style={styles.container}>
    <Image
      source={require('./assets/avicii.jpg')}
      style={styles.imageCentralizada}
    />
    <View style={styles.caixaDescricao}>
      <Text style={styles.nomeArtista}>Avicii</Text>
      <Text style={styles.descricao}>
        Avicii (Tim Bergling) foi um dos DJs mais influentes da música
        eletrônica, com hits como "Wake Me Up" e "Levels". Sua morte precoce
        deixou um grande legado na música EDM.
      </Text>
    </View>
  </SafeAreaView>
);

// 3 
const TelaBillie = () => (
  <SafeAreaView style={styles.container}>
    <Image
      source={require('./assets/billie.jpg')}
      style={styles.imageCentralizada}
    />
    <View style={styles.caixaDescricao}>
      <Text style={styles.nomeArtista}>Billie Eilish</Text>
      <Text style={styles.descricao}>
        Billie Eilish é conhecida por seu estilo único de música pop sombria e
        experimental. Seus álbuns e músicas como "Bad Guy" a tornaram uma
        sensação global.
      </Text>
    </View>
  </SafeAreaView>
);

// 4 
const OutrosCantores = () => {
  const cantores = [
    {
      title: 'Ariana Grande',
      caminho: require('./assets/ariana.jpg'),
      desc: 'Ariana Grande-Butera é uma cantora, compositora e atriz norte-americana.',
    },
    {
      title: 'Bruno Mars',
      caminho: require('./assets/BrunoMars.jpg'),
      desc: 'Bruno Mars é um cantor, compositor e dançarino americano.',
    },
    {
      title: 'Adele',
      caminho: require('./assets/adele.jpg'),
      desc: 'Adele Laurie Blue Adkins MBE é uma cantora, compositora e multi-instrumentista britânica.',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState(null);

  const abrirModal = (item) => {
    setItemSelecionado(item);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={cantores}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listaContent}
        renderItem={({ item }) => (
          <View style={styles.itens}>
            <Text style={styles.nomeCantor}>{item.title}</Text>
            <Image source={item.caminho} style={styles.img} />
            <Pressable
              onPress={() => abrirModal(item)}
              style={styles.botaoDescricao}>
              <Text style={styles.textoBotao}>Descrição</Text>
            </Pressable>
          </View>
        )}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {itemSelecionado?.desc || 'Sem descrição'}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={fecharModal}>
              <Text style={styles.textStyle}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

// 5 
const TelaLadyGaga = () => (
  <SafeAreaView style={styles.container}>
    <Image
      source={require('./assets/ladygaga.jpg')}
      style={styles.imageCentralizada}
    />
    <View style={styles.caixaDescricao}>
      <Text style={styles.nomeArtista}>Lady Gaga</Text>
      <Text style={styles.descricao}>
        Lady Gaga é uma cantora, compositora e atriz americana conhecida por
        seus visuais extravagantes e música inovadora, com hits como "Bad
        Romance" e "Poker Face".
      </Text>
    </View>
  </SafeAreaView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Inicio}
          options={{ title: 'Início' }}
        />
        <Stack.Screen name="TelaWeeknd" component={TelaWeeknd} />
        <Stack.Screen name="TelaAvicii" component={TelaAvicii} />
        <Stack.Screen name="TelaBillie" component={TelaBillie} />
        <Stack.Screen name="OutrosCantores" component={OutrosCantores} />
        <Stack.Screen name="TelaLadyGaga" component={TelaLadyGaga} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, 
  },
  botao: {
    backgroundColor: '#e4c0fc',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  img: {
    width: 110,
    height: 110,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageCentralizada: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'full',
    marginVertical: 8,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#BE89C7',
  },
  itens: {
    backgroundColor: '#cb98ed',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: screenWidth / 2 - 30,
  },
  nomeCantor: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
  },
  botaoDescricao: {
    marginTop: 10,
    backgroundColor: '#bb60f7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  caixaDescricao: {
    backgroundColor: '#fdf0ff',
    padding: 16,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d1a3e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },

  nomeArtista: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#8e44ad',
    textAlign: 'center',
  },

  descricao: {
    fontSize: 14, 
    paddingHorizontal: 20,
    marginTop: 13,
    color: '#333333',
    lineHeight: 20,
    fontFamily: 'Arial',
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#d8aef5',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
  },
  buttonClose: {
    backgroundColor: '#c173f5',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});
