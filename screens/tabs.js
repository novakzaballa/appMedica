import * as React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, ScrollView, SegmentedButtons} from 'react-native';
import { Avatar, Button, Card, Divider, FAB, Modal, Portal, Text, List } from 'react-native-paper';
import { TabView } from 'react-native-tab-view';
import { AlphabetList } from "react-native-section-alphabet-list";
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import _ from 'lodash';

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
    },
    'verified': true
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
    },
    'verified': true
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
    },
    'verified': true
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
    "especialidad": "Gastroenterologa",
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
    },
    'verified': true
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
    },
    'verified': true
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
    },
    'verified': true
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
    },
    'verified': true
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
const SecondRoute = ({navigation}) => (
  <View style={[styles.scene, { backgroundColor: '#fff' }]}>
    <AlphabetList
      data={data}
      indexLetterStyle={{ 
        color: 'blue', 
        fontSize:15,
      }}
      renderCustomItem={(item) => (
        <>
          <Card
            mode='elevated' 
            style={styles.cardCoverView}
            onPress = {
              () =>{
                navigation.navigate('Profile', {
                  user: item
                })
              }
            }
          >
            <Card.Content style={styles.cardContent}>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.cardCover}/>
              <View style={styles.textsView}>
                <Text variant="titleLarge">{item.nombre}{item.verified && 
                  <Button style={styles.verified} icon={require('./src/quality.png')} mode='text'/>}
                </Text>
                <Text variant="bodyMedium">{item.especialidad}</Text>
                <Text variant="bodyMedium">{item.ubicacion.description}</Text>
              </View>
            </Card.Content>
          </Card>
        </>
      )}
    />
  </View>
);

const Tabs =({navigation}) => {

  const [enableGPS, setEnableGPS] = React.useState(false);
  const [proximityOrder, setProximityOrder] = React.useState(data);
  const [currentPosition, setCurrentPosition] = React.useState({});

  const calculateDistanceBetweenTwoCoordinates = (lat1, lon1, lat2, lon2) => {
    // Convertir todas las coordenadas a radianes
    lat1 = degreetoRadians(lat1);
    lon1 = degreetoRadians(lon1);
    lat2 = degreetoRadians(lat2);
    lon2 = degreetoRadians(lon2);
    // Aplicar fórmula
    const EARTH_RADIO_KM = 6371;
    let diffBetweenLongs = (lon2 - lon1);
    let diffBetweenLats = (lat2 - lat1);
    let a = Math.pow(Math.sin(diffBetweenLats / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diffBetweenLongs / 2.0), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIO_KM * c;
  };

  const degreetoRadians = (grados) => {
      return grados * Math.PI / 180;
  };

  check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  .then((result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('This feature is not available (on this device / in this context)');
        break;
      case RESULTS.DENIED:
        request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
          console.log(result)
        });      
        console.log('The permission has not been requested / is denied but requestable');
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        setEnableGPS(true);
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    console.log(error);
  });

  !enableGPS &&
  Geolocation.getCurrentPosition(
    position => {
      setProximityOrder(sortDoctorList(position, data));
      setCurrentPosition(position);
    },
    error => {
      console.log(error);
    },
    {
      accuracy: {
        android: 'high',
        ios: 'best',
      },
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000,
      distanceFilter: 0,
      forceRequestLocation: true,
      forceLocationManager: false,
      showLocationDialog: true,
    },
  );

  const sortDoctorList = (currentPosition, data) =>{
    let dataCopy = [...data];
      for(let i = 0; i <dataCopy.length; i++){
        let dist = calculateDistanceBetweenTwoCoordinates(
          currentPosition.coords.latitude, 
          currentPosition.coords.longitude, 
          data[i].ubicacion.latitude, 
          data[i].ubicacion.longitude
        )
        dataCopy[i] = {...dataCopy[i], dist}
      }
    return (_.sortBy(dataCopy, ['dist']));
  }

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'By speciallity'},
    { key: 'second', title: 'By name' },
  ]);

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={ ({ route}) => {
          switch (route.key) {
            case 'first': FirstRoute
              return(<FirstRoute currentPosition={currentPosition} navigation={navigation} doctorList={proximityOrder}/>)
            case 'second':
              return <SecondRoute navigation={navigation}/>;
            default:
              return null;
          }
        }}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        style={styles.container} />
        <FAB
          style={styles.fab}
          color={'white'}
          label="Open Map"
          onPress = {
            () =>{
                navigation.navigate('Map', {
                  coordinates: {currentPosition, proximityOrder}
                }
              )
            }
          }/>
    </>
  );
}

const FirstRoute = (props) =>{
  const [visible, setVisible] = React.useState(false);
  const { currentPosition, doctorList, navigation } = props;
  const doctorListGroupBy = _.groupBy(doctorList, 'especialidad');

  const DoctorList = () => {
    return Object.keys(doctorListGroupBy).map((obj, i) => {
        return (
          <>
           {<List.Subheader style ={styles.subHeaderList}>{obj}</List.Subheader>}
            {doctorListGroupBy[obj].map((item, index) => (
              <Card
                mode='elevated' 
                style={styles.cardCoverView}
                onPress = {
                  () =>{
                    navigation.navigate('Profile', {
                      user: item,
                      currentPosition: currentPosition
                    })
                  }
                }
              >
                <Card.Content style={styles.cardContent}>
                    <Card.Cover src={{uri:'https://picsum.photos/200'}} style={styles.cardCover}/>
                  <View style={styles.textsView}>
                    <Text variant="titleLarge">{item.nombre}</Text>
                    <Text variant="bodyMedium">{item.especialidad}</Text>
                    <Text variant="bodyMedium">{item.ubicacion.description}</Text>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </>
        )
    })
  }

  return(
    <ScrollView style={[styles.scene, { backgroundColor: '#fff' }]} >
      <DoctorList/>
    </ScrollView>
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
  sectionHeaderLabel: {
    color: '#000',
  },
  subHeaderList:{
    backgroundColor: 'gray',
    color:'white',
    fontSize: 15
  },
  fab: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  cardContent: {
    flexDirection: 'row'
  },
  cardCover: {
    height: 100,
    width: 100,
  },
  textsView: {
    margin:10
  },
  cardCoverView:{
    backgroundColor: '#1CB6D2',
    margin: 10
  },
  verified:{
    padding:0,
    margin:0
  }
});

export default Tabs;