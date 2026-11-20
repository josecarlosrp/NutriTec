import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface registroCom {
  irALogin: () => void;
  registrarUsuario: (nombre: string, correo: string, contrasena: string) => void;
}

export default function Registro({ irALogin, registrarUsuario }: registroCom) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>

      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu correo"
        autoCapitalize="none"
        keyboardType="email-address"
        value={correo}
        onChangeText={setCorreo}
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Tu contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton} onPress={() => registrarUsuario(nombre, correo, contrasena)}>
        <Text style={styles.textoBoton}>Registrarme</Text>
      </TouchableOpacity>

      {/* Redirige al Login */}
      <TouchableOpacity onPress={irALogin}>
        <Text style={styles.enlace}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
    marginTop: 4,
  },
  boton: {
    backgroundColor: '#0f8a2c',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 16,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  enlace: {
    color: '#100F1F',
    textAlign: 'center',
  },
});
