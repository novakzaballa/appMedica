import React from 'react';
import {Card, Searchbar, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './src/utilitis/Colors';
import {SelectList} from 'react-native-dropdown-select-list';
import _ from 'lodash';
import {FlatList, View, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import DoctorCard from './components/DoctorCard';
import {AgendaList} from 'react-native-calendars';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';

const MainHome = ({navigation, route}) => {
  const doctorData = [
    {
      value: 'Michael Torrez',
      nombre: 'Michael Torrez',
      key: 'lCUTs2',
      especialidad: 'Traumatologia',
      profilePhoto:
        'https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp',
      ubicacion: {
        latitude: -17.397819,
        longitude: -66.151931,
        city: 'Madrid',
        description: 'Puerta del Sol',
      },
      verified: true,
    },
    {
      value: 'Emmanuel  Gazmey',
      key: 'TXdL0c2',
      nombre: 'Emmanuel  Gazmey',
      especialidad: 'Pediatria',
      profilePhoto:
        'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
      ubicacion: {
        latitude: -16.512764,
        longitude: -68.128196,
        city: 'La paz',
        description: 'Puerta del Sol',
      },
      verified: true,
    },
    {
      value: 'Jose Osorio',
      nombre: 'Jose Osorio',
      key: 'TXdLeaav0c2',
      profilePhoto:
        'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
      especialidad: 'Oncologia',
      ubicacion: {
        latitude: -16.508423,
        longitude: -68.126992,
        city: 'La paz',
        description: 'Isabel la Catolica',
      },
      verified: true,
    },
    {
      value: 'Emma Lunas',
      nombre: 'Emma Lunas',
      key: 'TXzddL0c',
      profilePhoto:
        'https://virtualdr.ca/wp-content/uploads/2022/02/online-doctor-Ontario.webp',
      especialidad: 'Traumatologia',
      ubicacion: {
        latitude: -16.496981,
        longitude: -68.121777,
        city: 'La paz',
        description: 'AV. busch',
      },
    },
    {
      value: 'Ester Soliz',
      nombre: 'Ester Soliz',
      key: 'TXsdLsg0c',
      profilePhoto:
        'https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png',
      especialidad: 'Gastroenterologia',
      ubicacion: {
        latitude: -16.487284,
        longitude: -68.121897,
        city: 'La paz',
        description: 'AV. busch',
      },
    },
    {
      value: 'Jesus Cortez',
      nombre: 'Jesus Cortez',
      key: 'TXdLc0c',
      profilePhoto:
        'https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=',
      especialidad: 'Nefrologia',
      ubicacion: {
        latitude: -16.525448,
        longitude: -68.10959,
        city: 'La paz',
        description: 'Obrahjes calle 6',
      },
      verified: true,
    },
    {
      value: 'Juan Perez',
      nombre: 'Juan Perez',
      key: 'psg2PM',
      profilePhoto:
        'https://cdn-fkafl.nitrocdn.com/SmcWMfFNujZDzRWxSfczwRCYPPFFCBMB/assets/images/optimized/rev-c48b233/wp-content/uploads/2020/01/Dr.Abdul-Hafeez-1-1.jpg',
      especialidad: 'Pediatria',
      ubicacion: {
        latitude: -16.496524,
        longitude: -68.144174,
        city: 'La paz',
        description: 'Max Paredes Nro 579',
      },
    },
    {
      value: 'Salomon Villada',
      nombre: 'Salomon Villada',
      key: 'zqsiEw2',
      especialidad: 'Neurologia',
      ubicacion: {
        latitude: -16.507763,
        longitude: -68.127458,
        city: 'La paz',
        description: 'Av. 6 de Agosto',
      },
      verified: true,
    },
    {
      value: 'Juan Lordoño',
      nombre: 'Juan Lordoño',
      key: 'zqsiE2w3',
      profilePhoto:
        'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*',
      especialidad: 'Cardiologia',
      ubicacion: {
        latitude: -16.497555,
        longitude: -68.124245,
        city: 'La paz',
        description: 'Stadium',
      },
      verified: true,
    },
    {
      value: 'Benito Martinez',
      nombre: 'Benito Martinez',
      key: 'z1qsiEw4',
      profilePhoto:
        'https://flxt.tmsimg.com/assets/p14159582_n1138325_cc_v9_aa.jpg',

      especialidad: 'Medico General',
      ubicacion: {
        latitude: -16.502882,
        longitude: -68.120763,
        city: 'La paz',
        description: 'Av. busch Triangular',
      },
      verified: true,
    },
    {
      value: 'Paola Vera',
      nombre: 'Paola Vera',
      key: 'zqsiEw5',
      profilePhoto:
        'https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=',
      especialidad: 'Gastroenterologia',
      ubicacion: {
        latitude: -16.509244,
        longitude: -68.119179,
        city: 'La paz',
        description: 'Av. Saavedra',
      },
    },
    {
      value: 'Gilmar Salzar',
      nombre: 'Gilmar Salzar',
      key: '1K6Iaj2318',
      profilePhoto:
        'https://www.woodlandshospital.in/images/doctor-img/ravi-kant-saraogi.jpg',
      especialidad: 'Ginecologia',
      ubicacion: {
        latitude: -16.502931,
        longitude: -68.121956,
        city: 'La paz',
        description: 'Av. Saavedra esq. Villalobos',
      },
    },
    {
      value: 'Alberto Medrano',
      nombre: 'Alberto Medrano',
      key: '1K6Iw00s18',
      profilePhoto:
        'https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg',

      especialidad: 'Gastroenterologia',
      ubicacion: {
        latitude: -16.588905,
        longitude: -68.176811,
        city: 'El Alto',
        description: 'El Alto',
      },
    },
  ];
  const doctorDates = [
    {

      title: '2023/02/27',
      data: [{
        nombre: 'Juan Lordoño',
        key: 'zqsiE2w3',
        profilePhoto:
          'https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*',
        especialidad: 'Cardiologia',
        isAppoinment: true,
        ubicacion: {
          latitude: -16.497555,
          longitude: -68.124245,
          city: 'La paz',
          description: 'Stadium',
        },
        verified: true,
    }]
    },
    {

      title: '2023/02/28',
      data: [{
        nombre: 'Alberto Medrano',
        key: '1K6Iw00s18',
        profilePhoto:
          'https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg',
        especialidad: 'Gastroenterologia',
        isAppoinment: true,
        ubicacion: {
          latitude: -16.588905,
          longitude: -68.176811,
          city: 'El Alto',
          description: 'El Alto',
        }
      }],
    },
  ];
  const doctorRecents = [
    {
      value: 'Michael Torrez',
      nombre: 'Michael Torrez',
      key: 'lCUTs2',
      especialidad: 'Traumatologia',
      profilePhoto:
        'https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp',
      ubicacion: {
        latitude: -17.397819,
        longitude: -66.151931,
        city: 'Madrid',
        description: 'Puerta del Sol',
      },
      verified: true,
    },
    {
      value: 'Alberto Medrano',
      nombre: 'Alberto Medrano',
      key: '1K6Iw00s18',
      profilePhoto:
        'https://www.kauveryhospital.com/doctorimage/recent/salem/Dr_P_V_Dhanapal.jpg',
      especialidad: 'Gastroenterologia',
      ubicacion: {
        latitude: -16.588905,
        longitude: -68.176811,
        city: 'El Alto',
        description: 'El Alto',
      },
    },
  ];
  /*const agendaItems = [
    {
      title: '2023/02/12',
      data: [{hour: '12am', duration: '1h', title: 'First Yoga'}]
    },
    {
      title: '2023/02/13',
      data: [
        {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
        {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'}
      ]
    },
    {
      title: '2023/02/14',
      data: [
        {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
        {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
        {hour: '3pm', duration: '1h', title: 'Private Yoga'}
      ]
    },
    {
      title: '2023/02/15',
      data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}]
    },
    {
      title: '2023/02/16',
      data: [{}]
    },
    {
      title: '2023/02/17', 
      data: [
        {hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}
      ]
    },
    {
      title: '2023/02/18',
      data: [
        {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
        {hour: '10pm', duration: '1h', title: 'Ashtanga'},
        {hour: '11pm', duration: '1h', title: 'TRX'},
        {hour: '12pm', duration: '1h', title: 'Running Group'}
      ]
    },
    {
      title: '2023/02/20', 
      data: [
        {hour: '12am', duration: '1h', title: 'Last Yoga'}
      ]
    }
  ];*/
  const [viewList, setViewList] = React.useState(false);
  const [selected, setSelected] = React.useState();
  const [enableGPS, setEnableGPS] = React.useState(false);
  const [proximityOrder, setProximityOrder] = React.useState(doctorData);
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
      setProximityOrder(sortDoctorList(position, doctorData));
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

  const doctorListGroupBy = _.groupBy(doctorData, 'especialidad');
  const changeViewList = (val) => {
    setSelected(val);
    setViewList(true);
  };

  const DATA = [
    {
      id: '1',
      uri: 'https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp',
    },
    {id: '2', uri: 'https://reactjs.org/logo-og.png'},
    {id: '3', uri: 'https://reactjs.org/logo-og.png'},
    {id: '4', uri: 'https://reactjs.org/logo-og.png'},
    {id: '5', uri: 'https://reactjs.org/logo-og.png'},
  ];
  const specialtyData = [
    {key: 'Ginecologia', value: 'Ginecologia'},
    {key: 'Traumatologia', value: 'Traumatologia'},
    {key: 'Cardiologia', value: 'Cardiologia'},

    {key: 'Gastroenterologia', value: 'Gastroenterologia'},
    {key: 'Medico General', value: 'Medico General'},

    {key: 'Neurologia', value: 'Neurologia'},
    {key: 'Pediatria', value: 'Pediatria'},
    {key: 'Oncologia', value: 'Oncologia'},
    {key: 'Nefrologia', value: 'Nefrologia'},
  ];
  const CheckIcon = (props) => {
    return (
      <Icon name="check-decagram" size={22} color={Colors.PRIMARY_BLUE} solid />
    );
  };
  const navProfile = (item) => {
    navigation.navigate('Profile', {
      user: item,
      currentPosition: {},
    });
  };

  const DoctorList = () => {
    return Object.keys(doctorListGroupBy).map((obj, i) => {
      if (obj === selected) {
        return (
          <>
            {doctorListGroupBy[selected].map((item, index) => (
              <DoctorCard
                profilePhoto={item.profilePhoto}
                key={index}
                name={item.nombre}
                specialty={item.especialidad}
                verified={item.verified}
                description={item.ubicacion.description}
                navProfile={() => {
                  navigation.navigate('Profile', {
                    user: item,
                    currentPosition: {},
                  });
                }}
              />
            ))}
          </>
        );
      }
    });
  };

  const DoctorRenderList = ({data}) => {
    return data.map((item, i) => (
      <DoctorCard
        profilePhoto={item.profilePhoto}
        key={i}
        name={item.nombre}
        specialty={item.especialidad}
        verified={item.verified}
        navProfile={() => {
          navigation.navigate('Profile', {
            user: item,
            currentPosition: {},
          });
        }}
      />
    ));
  };
  
  const renderItem = React.useCallback((item: any) => {
    return(
      <DoctorCard
        profilePhoto={item.item.profilePhoto}
        isAppoinment
        name={item.item.nombre}
        specialty={item.item.especialidad}
        verified={item.item.verified}
        description={item.item.ubicacion.description}
        navMap={() => {
          navigation.navigate('Map', {
            coordinates: {
              currentPosition, 
              doctorList: item.item, 
              isComponent: true
            }
          });
        }}
        navProfile={() => {
          navigation.navigate('Profile', {
            user: item.item,
            currentPosition: {},
          });
        }}
      />)
  }, [currentPosition, proximityOrder]);

  return (
    <View style={styles.scene}>
      <SelectList
        setSelected={(val) => changeViewList(val)}
        data={specialtyData}
        placeholder="Buscar por especialidad"
        searchPlaceholder="Buscar por especialidad"
        save="value"
        boxStyles={styles.selectDropdown}
        dropdownStyles={styles.selectDropdown}
      />
      <ScrollView>
        {viewList && <DoctorList />}
        {!viewList && (
          <View>
            <Text variant="headlineLarge" style={{marginHorizontal: 10}}>
              Promociones
            </Text>
            <FlatList
              data={DATA}
              style={{margin: 10}}
              horizontal={true}
              textColor="black"
              renderItem={({item}) => (
                <Card
                  style={styles.button}
                  onPress={() => console.log('DEBUG')}
                >
                  <Card.Cover
                    style={styles.button}
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                  />
                </Card>
              )}
              keyExtractor={(item) => item.id}
            />
            <Card style={{margin: 10}}>
              <Card.Cover source={{uri: 'https://reactjs.org/logo-og.png'}} />
            </Card>
            <Text variant="headlineSmall" style={{marginHorizontal: 10, marginBottom: 10}}>
              Citas Proximas:
            </Text>
            <SafeAreaView style={{flex: 1}}>
            {currentPosition !== {} && <AgendaList
              sections={doctorDates}
              renderItem={renderItem}
              sectionStyle={styles.section}
              dayFormat={'dd/MM/yyyy'}
            />}
            </SafeAreaView>
            <Text variant="headlineSmall" style={{marginHorizontal: 10}}>
              Recientes
            </Text>
            <View>
              <DoctorRenderList data={doctorRecents} />
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
export default MainHome;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#E6EEF2',
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '15%',
  },
  container2: {
    marginTop: 20,
    borderWidth: 1,
  },
  button: {
    width: 100,
    height: 100,
    marginRight: 10,
    backgroundColor: '#2196F3',
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardCover: {
    height: 100,
    width: 100,
  },
  textsView: {
    margin: 10,
  },
  cardCoverView: {
    backgroundColor: '#FFF',
    margin: 10,
  },
  selectDropdown: {backgroundColor: '#FFF', margin: 10},
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row'
  },
  section: {
    backgroundColor: Colors.TRANSPARENT,
    color: Colors.SECONDARY_BLUE,
    textTransform: 'capitalize',
    paddingTop: 0,
    paddingBottom: 0
  }
});
