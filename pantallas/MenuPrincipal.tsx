import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Image, Modal } from "react-native";

export default function MenuPrincipal() {
  const menuCafeteria = [
    {id: '1', nombre: 'Burritos', precio: '16$', tiempo: '10 min'},
    {id: '2', nombre: 'Torta', precio: '50$', tiempo: '10 min'},
    {id: '3', nombre: 'Agua', precio: '20$', tiempo: '2 min'}
  ];

  const productosAlumnos  = [
    {id: '101', producto: 'Sandwiches', vendedor: 'Salvador', precio: '$20', imagen: require('../assets/productos/sandwich.jpg')},
    {id: '102', producto: 'Hielitos', vendedor: 'Alicia', precio: '$15', imagen: require('../assets/productos/hielitos.jpg')},
    {id: '103', producto: 'Gomitas', vendedor: 'Ana', precio: '$15', imagen: require('../assets/productos/gomitas.jpg')},
  ];

  const contactarVendedor = () => {
    Alert.alert("Contacto", '*Abre el chat del contacto*');
  };

  const [idSeleccionado, setIdSeleccionado] = useState('');
  const productoSeleccionado = productosAlumnos.find(item => item.id === idSeleccionado);

  return (
    <ScrollView style={styles.container}>
        <Text style={styles.encabezado}>NutriTec</Text>

        {/* Seccion 1: La cafeteria */}
        <Text style={styles.tituloSeccion}>Menu de la Cafeteria</Text>
        {menuCafeteria.map((item) => (
            <View key={item.id} style={styles.tarjeta}>
                <Text style={styles.nombreProducto}>{item.nombre}</Text>
                <Text style={styles.precioText}>Precio: {item.precio}</Text>
                <Text style={styles.subtexto}>Tiempo de espera: {item.tiempo}</Text>
            </View>
        ))}

        {/* Seccion 2: Negocios Alumnos */}
        <Text style={styles.tituloSeccion}>Ventas Alumnos</Text>
        {productosAlumnos.map((item) => (
          <TouchableOpacity key={item.id} style={styles.tarjetaAlumno} onPress={() => setIdSeleccionado(item.id)}>
            <Text style={styles.nombreProducto}>{item.producto}</Text>
            <Text style={styles.vendedorText}>Vendedor: {item.vendedor}</Text>
            <Text style={styles.precioText}>Precio: {item.precio}</Text>
            <Text style={styles.subtexto}>Ver detalle</Text>
          </TouchableOpacity>
        ))}
        {productoSeleccionado && (
          <Modal visible={true} transparent={true} animationType="slide" onRequestClose={() => setIdSeleccionado('')}>
            <View style={styles.fondoDetalle}>
              <View style={styles.panelDetalle}>
                <Image source={productoSeleccionado.imagen} style={styles.fotoProducto} resizeMode="cover"/>

                <Text style={styles.nombreProducto}> {productoSeleccionado.producto} </Text>
                <Text style={styles.precioText}> Precio: {productoSeleccionado.precio} </Text>
                <Text style={styles.vendedorText}> Vendedor: {productoSeleccionado.vendedor} </Text>

                <TouchableOpacity style={styles.botonContactar} onPress={() => contactarVendedor()}>
                  <Text style={styles.textoBoton}>Enviar mensaje</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botonCerrar} onPress={() => setIdSeleccionado('')}>
                  <Text>Cerrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 35, 
  },
  encabezado: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#2e7d32',
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  tarjeta: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#100F1F',
  },
  tarjetaAlumno: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precioText: {
    fontSize: 14,
    color: '#2e7d32',
    fontWeight: 'bold',
    marginTop: 4,
  },
  vendedorText: {
    fontSize: 13,
    color: '#555',
  },
  subtexto: {
    fontSize: 12,
    color: '#888',
  },
  botonContactar: {
    backgroundColor: '#2e7d32',
    padding: 8,
    borderRadius: 5,
    marginTop: 8,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  
  // Detalles de los productos
  fondoDetalle: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  panelDetalle: {
    backgroundColor: 'white',
    padding: 20,
    paddingBottom: 32,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  fotoProducto: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  botonCerrar: {
    alignItems: 'center',
    padding: 12,
    marginTop: 4,
  }
});