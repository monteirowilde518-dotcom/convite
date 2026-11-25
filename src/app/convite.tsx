import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  // Função simples executada ao clicar no botão
  function confirmar() {
    Alert.alert('Presença Confirmada!', 'Obrigado por confirmar sua presença na festa!');
  }

  return (
    <View style={styles.container}>
      {/* Imagem usando o arquivo que já existe na sua pasta assets */}
      <Image
        source={require('../../assets/images/icon.png')} // Certifique-se de que o caminho está correto
        style={styles.imagem}
      />

      {/* Texto 1: Título */}
      <Text style={styles.titulo}>Festa de Aniversário! 🎉</Text>

      {/* Texto 2: Data */}
      <Text style={styles.texto}>Data: 26/05/2026 às 19:00</Text>

      {/* Texto 3: Local */}
      <Text style={styles.texto}>Local: Parque Verde 1 Camaçari, nº 23</Text>

      {/* Texto 4: Observação */}
      <Text style={styles.observacao}>
        Observação: Traga sua bebida favorita e venha se divertir!
      </Text>

      {/* Botão Confirmar Presença */}
      <TouchableOpacity style={styles.botao} onPress={confirmar}>
        <Text style={styles.textoBotao}>Confirmar Presença</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 15,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    color: '#444444',
    marginBottom: 8,
    textAlign: 'center',
  },
  observacao: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666666',
    marginTop: 10,
    marginBottom: 25,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
