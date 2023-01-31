import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView, SegmentedButtons} from 'react-native';
import { Button, Modal, Portal, Searchbar, Text } from 'react-native-paper';
import { TabView } from 'react-native-tab-view';
import { AlphabetList } from "react-native-section-alphabet-list";
import { List, Avatar } from 'react-native-paper';
 
const SecondRoute = ({navigation}) => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <AlphabetList
      data={data}
      indexLetterStyle={{ 
        color: 'blue', 
        fontSize:15,
      }}
      renderCustomItem={(item) => (
        <List.Item
          title={item.nombre}
          right={props => <List.Icon {...props} icon={require('./src/usuario.png')}/>}
          onPress = {
            () =>{
                navigation.navigate('Profile', {
                  doctor: item
                }
              )
            }
          } 
        />
      )}
    />
  </View>
);
const FirstRoute = ({navigation}) =>{
  const [visible, setVisible] = React.useState(false);

  return(
    <View style={[styles.scene, { backgroundColor: '#fff' }]} >
    </View>
  );
} 

  const data = [
    { "value": "Michael Torrez",
      "nombre": "Michael Torrez", 
      "key": "lCUTs2",
      "especialidad": "Traumatologo",
      "ubicacion": {
        "latitude": -17.397819,
        "longitude": -66.151931,
        "city": "Madrid",
        "description": "Puerta del Sol"
      }
    },
    { "value": "Emmanuel  Gazmey", 
      "key": "TXdL0c2",
      "nombre": "Emmanuel  Gazmey",
      "especialidad": "Pediatra",
      "ubicacion": {
        "latitude": -16.512764, 
        "longitude": -68.128196,
        "city": "La paz",
        "description": "Puerta del Sol"
      }
    },
    { "value": "Jose Osorio",
      "nombre": "Jose Osorio", 
      "key": "TXdLeaav0c2",
      "especialidad": "Oncologo",
      "ubicacion": {
        "latitude": -16.508423,
        "longitude": -68.126992,
        "city": "La paz",
        "description": "Isabel la Catolica"
      }
    },
    { "value": "Emma Lunas",
      "nombre": "Emma Lunas", 
      "key": "TXzddL0c",
      "especialidad": "Traumatologo",
      "ubicacion": {
        "latitude": -16.496981,
        "longitude": -68.121777,
        "city": "La paz",
        "description": "AV. busch"
      }
    },
    { 
      "value": "Ester Soliz",
      "nombre": "Ester Soliz",
      "key": "TXsdLsg0c",
      "especialidad": "GAstroenterologa",
      "ubicacion": {
        "latitude": -16.487284,
        "longitude": -68.121897,
        "city": "La paz",
        "description": "AV. busch"
      }
    },
    { 
      "value": "Jesus Cortez",
      "nombre": "Jesus Cortez",
      "key": "TXdLc0c",
      "especialidad": "Nefrologo",
      "ubicacion": {
        "latitude": -16.525448,
        "longitude": -68.109590,
        "city": "La paz",
        "description": "Obrahjes calle 6"
      }
    },
    { 
      "value": "Juan Perez",
      "nombre": "Juan Perez",
      "key": "psg2PM",
      "especialidad": "Pediatra",
      "ubicacion": {
        "latitude": -16.496524,
        "longitude": -68.144174,
        "city": "La paz",
        "description": "Max Paredes Nro 579"
      }
    },
    { 
      "value": "Salomon Villada",
      "nombre": "Salomon Villada", 
      "key": "zqsiEw2",
      "especialidad": "Neurologo",
      "ubicacion": {
        "latitude": -16.507763,
        "longitude": -68.127458,
        "city": "La paz",
        "description": "Av. 6 de Agosto"
      }
    },
    { 
      "value": "Juan Lordoño",
      "nombre": "Juan Lordoño",
      "key": "zqsiE2w3",
      "especialidad": "Cardiologo",
      "ubicacion": {
        "latitude": -16.497555,
        "longitude": -68.124245,
        "city": "La paz",
        "description": "Stadium"
      }
    },
    { 
      "value": "Benito Martinez",
      "nombre": "Benito Martinez",
      "key": "z1qsiEw4",
      "especialidad": "Medico General",
      "ubicacion": {
        "latitude": -16.502882,
        "longitude": -68.120763,
        "city": "La paz",
        "description": "Av. busch Triangular"
      }
    },
    { 
      "value": "Paola Vera",
      "nombre": "Paola Vera",
      "key": "zqsiEw5",
      "especialidad": "Gastroenterologo",
      "ubicacion": {
        "latitude": -16.509244,
        "longitude": -68.119179,
        "city": "La paz",
        "description": "Av. Saavedra"
      }
    },
    { 
      "value": "Gilmar Salzar",
      "nombre": "Gilmar Salzar",
      "key": "1K6Iaj2318",
      "especialidad": "Ginecologo",
      "ubicacion": {
        "latitude": -16.502931,
        "longitude": -68.121956,
        "city": "La paz",
        "description": "Av. Saavedra esq. Villalobos"
        } 
    }
  ]

const Tabs =({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'By speciallity'},
    { key: 'second', title: 'By name' },
  ]);

  return (
    <>
      <Searchbar
          placeholder="Search Health Professionals..."
          icon={require('./src/busqueda.png')} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={ ({ route}) => {
          switch (route.key) {
            case 'first': FirstRoute
              return <FirstRoute navigation={navigation}/>;
            case 'second':
              return <SecondRoute navigation={navigation}/>;
            default:
              return null;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
  listItemContainer: {
    flex: 1,
    justifyContent: 'center',
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  listItemLabel: {
    color: '#000',
    fontSize: 14,
  },
  sectionHeaderContainer: {
    backgroundColor: 'gray',
    justifyContent: 'center',
  },

  sectionHeaderLabel: {
    color: '#000',
  },
  container2: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: 'center',
    marginTop:'15%'
  },

});

export default Tabs;