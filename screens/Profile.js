import React from 'react';
import {Avatar, Button, FAB, Modal, Portal, Text} from 'react-native-paper';

import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import MapComponent from './components/mapComponent';
import Colors from './src/utilitis/Colors';

const Profile = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const [mapVisibility, setMapVisibility] = React.useState(false);
  const {currentPosition, user} = route.params;
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const DATA = [
    {key: '1', value: 'Miercoles, 1 de marzo'},
    {key: '2', value: 'Jueves, 2 de marzo'},
    {key: '3', value: 'Viernes, 3 de marzo'},
    {key: '4', value: 'Lunes, 6 de marzo'},
    {key: '5', value: 'Miercoles, 8 de marzo'},
  ];

  return (
    <View style={styles.scene}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <Text variant='titleSmall'>What does 'Verified' Means?</Text>
          <Text variant='bodySmall'>
            The verified icon means that our customer care staff, have
            thoroughly validated the identity, credentials, and location, of the
            user or health provider holding this account. Our company validates
            the above mentioned data when the health provider is registered in
            our platform for the first time, and once per year.{' '}
          </Text>
          <Button mode='text' onPress={hideModal}>
            Got it
          </Button>
        </Modal>
      </Portal>
      {mapVisibility && (
        <View style={styles.mapContainer}>
          <MapComponent
            currentPosition={currentPosition}
            markerCoordinates={user}
            isComponent={true}
            circleRatio={1}
          />
          <Button
            icon={require('./src/marcador-de-mapa.png')}
            mode='contained'
            onPress={() => {
              setMapVisibility(false);
            }}
          >
            cerrar
          </Button>
        </View>
      )}
      {!mapVisibility && (
        <View style={styles.container}>
          <Avatar.Image size={200} source={{uri: user.profilePhoto}} />
          {user.verified && (
            <Button
              icon={require('./src/quality.png')}
              mode='text'
              onPress={showModal}
            >
              Verificado
            </Button>
          )}
          <Text variant='titleLarge'>{user.nombre}</Text>
          <Text variant='bodyMedium'>{user.especialidad}</Text>
          {user.dist && (
            <Button
              textColor={Colors.SECONDARY_BLUE}
              icon={require('./src/marcador-de-mapa.png')}
              mode='text'
              onPress={() => {
                setMapVisibility(true);
              }}
            >
              {user.dist.toFixed(2)}Km. (Tap here to see the users's office
              location.)
            </Button>
          )}
          <Text variant='bodyMedium'>
            Dr. Paniagua has extensive experience in pediatrics. He coursed his
            major in UMSA, La Paz Bolivia, while completed his specialty in
            UNAM, Mexico D.F.
          </Text>
          <SafeAreaView style={styles.container2}>
            <Text variant='titleSmall'>Fechas proximas disponibles:</Text>
            <FlatList
              data={DATA}
              horizontal={true}
              textColor='black'
              renderItem={({item}) => (
                <Button
                  key={item.key}
                  style={styles.button}
                  mode='outlined'
                  textColor='black'
                  onPress={() => {
                    navigation.navigate('Appointment', {
                      doctor: user,
                      date: item,
                    });
                  }}
                >
                  {item.value}
                </Button>
              )}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
        </View>
      )}
      <FAB
        style={styles.fab}
        color={'white'}
        label='Make an Appointment'
        onPress={() => {
          navigation.navigate('Appointment', {
            doctor: user,
          });
        }}
      />
    </View>
  );
};
export default Profile;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 60,
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '15%',
  },
  container2: {
    margin: 10,
  },
  button: {
    width: 200,
    height: 40,
    marginTop: 10,
    marginRight: 10,
  },
  fab: {
    backgroundColor: '#2196F3',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 500,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
