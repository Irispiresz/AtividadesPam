import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const TelaPerfil = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.tituloTela}>Meu Perfil</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Mensagem (Opcional)"
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            numberOfLines={4}
            placeholderTextColor="#888"
          />
          <View style={styles.botaoContainer}>
            <Button
              title="Enviar Dados"
              onPress={handleEnviar}
              color="#002761"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
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
    color: '#333',
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

export default TelaPerfil;
