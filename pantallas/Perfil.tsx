import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function Perfil() {

  const presionarEditar = () => {
    Alert.alert("Editar Perfil", "*Se edita el perfil*");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tituloSeccion}>Mi Perfil</Text>

      {/* Foto de perfil */}
      <View style={styles.avatarContainer}>
        <View style={styles.avatarCírculo}>
        </View>
        <Text style={styles.rol}>Estudiante</Text>
      </View>

      {/* Bloque de Información */}
      <View style={styles.infoContenedor}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Completo:</Text>
          <Text style={styles.valor}>X</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Número de Control:</Text>
          <Text style={styles.valor}>X</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Carrera:</Text>
          <Text style={styles.valor}>X</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Correo Electrónico:</Text>
          <Text style={styles.valor}>X</Text>
        </View>
      </View>

      {/* Botón para editar (Simulado por ahora) */}
      <TouchableOpacity style={styles.botonEditar} onPress={presionarEditar}>
        <Text style={styles.textoBoton}>Editar Información</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    marginTop: 35,
  },
  tituloSeccion: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatarCírculo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#100F1F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatarTexto: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  rol: {
    fontSize: 14,
    color: '#666',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  infoContenedor: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 25,
  },
  campo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#888',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  valor: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  botonEditar: {
    backgroundColor: '#100F1F',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});