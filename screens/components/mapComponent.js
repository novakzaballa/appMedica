import React from 'react';
import { StyleSheet, View } from 'react-native'
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 
import { Button, Card, Modal, Portal, Text } from 'react-native-paper';
import Colors from '../src/utilitis/Colors';

const MapComponent = (props) => {

    const { currentPosition, markerCoordinates, isComponent, navigation } = props;
    const [visible, setVisible] = React.useState(false);
    const [coordinateData, setCoordinateData] = React.useState({});
    const showModal = (props) => {
        const {coordinateData} = props;
        setCoordinateData(coordinateData);
        setVisible(true);
    }
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: Colors.TRANSPARENT, padding: 10};

    return(
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={!isComponent ?
            {
                latitude: currentPosition.coords.latitude,
                longitude: currentPosition.coords.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            } :
            {
                latitude: markerCoordinates.ubicacion.latitude,
                longitude: markerCoordinates.ubicacion.longitude,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121, 
            }
            }
        >
            <Marker 
                coordinate={{ 
                    latitude : currentPosition.coords.latitude , 
                    longitude : currentPosition.coords.longitude 
                }} 
                icon={require('../src/locationPin.png')}
                title='Mi Ubicacion'/>
            { !isComponent &&
                <Circle 
                    center={{ latitude : currentPosition.coords.latitude , longitude : currentPosition.coords.longitude }} 
                    radius={5000} 
                    fillColor={'#2196F320'}/>}
            { !isComponent ? markerCoordinates.map((coordinateData,i) => (
                <Marker 
                    key={i}
                    coordinate={{ latitude : coordinateData.ubicacion.latitude , longitude : coordinateData.ubicacion.longitude }} 
                    title={`${coordinateData.especialidad}:${coordinateData.nombre}`}
                onPress={() => showModal({coordinateData})}/>
            )):
            <Marker coordinate={{ latitude : markerCoordinates.ubicacion.latitude, longitude : markerCoordinates.ubicacion.longitude }} title={`${markerCoordinates.especialidad}:${markerCoordinates.nombre}`}/>
            }
            <Portal>
                <Modal
                    visible={visible} 
                    onDismiss={hideModal} 
                    contentContainerStyle={containerStyle}   
                    style={{marginTop: '100%'}}>
                        <Card>
                            <Card.Content style={styles.cardContent}>
                            <Card.Cover source={{ uri: 'https://picsum.photos/200' }} style={{width: 100, height:100}}/>
                            <View style={{margin:10}}>
                                <Text variant="titleLarge">{coordinateData.nombre}</Text>
                                <Text variant="bodyMedium">{coordinateData.especialidad}</Text>
                            </View>
                            </Card.Content>
                            <Card.Actions>
                                <Button
                                    onPress = {
                                        () =>{
                                            hideModal();
                                            navigation.navigate('Profile', {
                                            user: coordinateData,
                                            currentPosition: currentPosition
                                            })
                                        }
                                    }
                                >Ir al Perfil
                                </Button>
                                <Button
                                    onPress = {
                                        () =>{
                                            hideModal();
                                            navigation.navigate('Appointment');
                                        }
                                    }>
                                    Crear cita
                                </Button>
                            </Card.Actions>
                        </Card>
                </Modal>
            </Portal>
        </MapView>
    )
}
export default MapComponent;

const styles = StyleSheet.create({

 map: {
   ...StyleSheet.absoluteFillObject,
 },
 cardContent: {
    flexDirection: 'row'
 }
});