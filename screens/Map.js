import React from 'react';
import { StyleSheet, View } from 'react-native'
import Slider from 'react-native-slider';
import MapComponent from './components/mapComponent';

const Map = ({navigation, route}) => {
    const { coordinates } = route.params;
    const [ratio, setRatio] = React.useState(1);

    return(
        <>
        <View style={styles.container}>
            <MapComponent
                currentPosition={coordinates.currentPosition} 
                markerCoordinates={coordinates.doctorList}
                specialty = {coordinates.selected || ''}
                isComponent = {coordinates.isComponent || false}
                navigation={navigation}
                circleRatio={ratio}/>
        </View>
        { coordinates.isSliderVisible &&
        <Slider 
            style={styles.fab}
            maximumValue={20} 
            minimumValue={0} 
            step={5}
            onValueChange={(value) => setRatio({value}) }/>}
        </>
    )
}
export default Map;

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: '100%',
   width: '100%',
   justifyContent: 'flex-end',
   alignItems: 'center'
 },
 slider:{
    marginTop: '100%',
    marginLeft: 30,
    marginRight: 30,
 },
 fab: {
    margin: 16,
    top: '90%',
  },
sliderView:{
    flexDirection: 'row'
}
});