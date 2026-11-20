import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Login from './pantallas/Login';
import Registro from './pantallas/Registro';
import MenuPrincipal from './pantallas/MenuPrincipal';
import Perfil from './pantallas/Perfil';
import Prueba from './pantallas/Prueba';

export interface Usuario {
  nombre: string;
  correo: string;
  contrasena: string;
}

export default function App() {
  // Pantallas
  const [pantalla, setPantalla] = useState<'login' | 'registro' | 'menu' | 'perfil'>('login');

  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([
    {nombre: 'Jose Carlos', correo: 'jose@prueba.com', contrasena: '1234'}
  ]); 

  // Registrar un nuevo usuario 
  function registrarUsuario(nombre: string, correo: string, contrasena: string) {

    if (nombre === '' || correo === '' || contrasena === '') {
      Alert.alert('Faltan datos', 'Completa los tres campos.');
      return;
    }

    if (listaUsuarios.some(usuario => usuario.correo === correo)) {
      Alert.alert('Ese correo ya está registrado.');
      return;
    }

    const nuevoUsuario = { nombre, correo, contrasena };
    setListaUsuarios(listaUsuarios.concat(nuevoUsuario));
    setPantalla('login');
    Alert.alert('Registro exitoso', 'Tu cuenta de prueba se creó correctamente.');
  }
  
  // Verificar que exista ese usuario
  function iniciarSesion(correo: string, contrasena: string) {
    
    const existe = listaUsuarios.some(usuario =>
      usuario.correo === correo && usuario.contrasena === contrasena
    );

    if (existe) {
      setPantalla('menu');
    } else {
      Alert.alert('Correo o contraseña incorrectos.');
    }
  }

  // Pantalla de 'login'
  if (pantalla === 'login') {
    return (
      <Login
        irARegistro={() => setPantalla('registro')}
        iniciarSesion={iniciarSesion}
      />
    );
  }
  // Pantalla es 'registro'
  if (pantalla === 'registro') {
    return (
      <Registro
        registrarUsuario={registrarUsuario}
        irALogin={() => setPantalla('login')}
      />
    );
  }

  // 3. Pantalla Menu ('menu')
  return (
    <View style={styles.container}>
      {/* Muestra la pantalla */}
      <View style={styles.contenido}>
        {pantalla === 'menu' && <MenuPrincipal />}
        {pantalla === 'perfil' && <Perfil />}
      </View>
      
      {/* Menu de bajo */}
      <View style={styles.barraNavegacion}>
        <TouchableOpacity style={styles.botonNav} onPress={() => setPantalla('menu')}>
          <Text style={styles.textoNav}>Casa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonNav} onPress={() => setPantalla('menu')}>
          <Text style={styles.textoNav}>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonNav} onPress={() => setPantalla('login')}>
          <Text style={styles.textoNav}>Mensajes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonNav} onPress={() => setPantalla('perfil')}>
          <Text style={styles.textoNav}>perfil</Text>
        </TouchableOpacity>
      </View>
    </View>

    // <View style={styles.container}>
    //   <Text style={styles.titulo}>¡Bienvenido a NutriiTec!</Text>
    //   <Text style={styles.subtitulo}>Has iniciado sesión.</Text>
    //   <TouchableOpacity style={styles.boton} onPress={() => setPantalla('login')}>
    //     <Text style={styles.textoBoton}>Cerrar sesión</Text>
    //   </TouchableOpacity>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contenido: {
    flex: 1,
  },
  barraNavegacion: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  botonNav: {
    alignItems: 'center',
  },
  textoNav: {
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
});
