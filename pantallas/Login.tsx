import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

interface loginCom {
  irARegistro: () => void;
  iniciarSesion: (correo: string, contrasena: string) => void;
}

export default function Login({ irARegistro, iniciarSesion }: loginCom) {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Iniciar Sesión</Text>

      <Text>Correo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        value={correo}
        onChangeText={setCorreo}
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton} onPress={() => iniciarSesion(correo, contrasena)}>
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>

      {/* Redirige a la pantalla de Registro */}
      <TouchableOpacity onPress={irARegistro}>
        <Text style={styles.enlace}>¿No tienes cuenta? Regístrate</Text>
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
    backgroundColor: '#100F1F',
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
