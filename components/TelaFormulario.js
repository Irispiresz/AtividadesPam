import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const TelaFormulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    if (!nome.trim() || !email.trim()) {
      alert('Por favor, preencha o nome e o e-mail.');
      return;
    }
    alert(
      `Dados enviados:\nNome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`
    );
    setNome('');
    setEmail('');
    setMensagem('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloTela}>Formulário de Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Mensagem (Opcional)"
        value={mensagem}
        onChangeText={setMensagem}
        multiline
        numberOfLines={4}
      />
      <View style={styles.botaoContainer}>
        <Button title="Enviar Dados" onPress={handleEnviar} color="#4CAF50" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  tituloTela: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  botaoContainer: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default TelaFormulario;
