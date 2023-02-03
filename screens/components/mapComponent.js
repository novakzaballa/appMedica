import React from 'react';
import { StyleSheet, View } from 'react-native'
import MapView, { Circle, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

const MapComponent = (props) => {
    const { currentPosition, markerCoordinates, isComponent } = props;
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
                longitudeDelta: 0.0121, }}
        >
            <Marker coordinate={{ latitude : currentPosition.coords.latitude , longitude : currentPosition.coords.longitude }} title='Mi Ubicacion'/>

            { !isComponent && <Circle center={{ latitude : currentPosition.coords.latitude , longitude : currentPosition.coords.longitude }} radius={1000} fillColor={'rgba(0,0,100,0.3)'}/>}
            { !isComponent ? markerCoordinates.map((coordinate,i) => (
                <Marker key={i} coordinate={{ latitude : coordinate.ubicacion.latitude , longitude : coordinate.ubicacion.longitude }} title={`${coordinate.especialidad}:${coordinate.nombre}`}/>
            )):
            <Marker coordinate={{ latitude : markerCoordinates.ubicacion.latitude, longitude : markerCoordinates.ubicacion.longitude }} title={`${markerCoordinates.especialidad}:${markerCoordinates.nombre}`}/>
            }
        </MapView>
    )
}
export default MapComponent;

const styles = StyleSheet.create({

 map: {
   ...StyleSheet.absoluteFillObject,
 },
});