import React from 'react';
import { StyleSheet, View } from 'react-native'
import MapComponent from './components/mapComponent';

const Map = ({navigation, route}) => {
    const { coordinates } = route.params;

    return(
        <View style={styles.container}>
            <MapComponent 
                currentPosition={coordinates.currentPosition} 
                markerCoordinates={coordinates.proximityOrder}
                navigation={navigation}/>
        </View>
    )
}
export default Map;

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: '100%',
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
});