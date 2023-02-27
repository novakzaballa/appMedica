import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../src/utilitis/Colors';

const CheckIcon =(props) => {
    return <Icon name='check-decagram' size={22} color={Colors.PRIMARY_BLUE} solid/>;
}

const DoctorCard = (props) => {
    const {description, hour, index, showButtons, specialty, name, navAppointment, navProfile, profilePhoto, verified} = props;
    return (
        <Card
          mode='elevated'
          style={styles.cardCoverView}
          key={index}
          onPress={navProfile}
        >
        <Card.Content style={styles.cardContent}>
            <Card.Cover source={{uri: profilePhoto}} style={styles.cardCover}/>
            <View style={styles.textsView}>
            <View style={styles.cardContent}>
                <Text variant='titleLarge'>{name}  </Text>
                {verified && <CheckIcon/>}
            </View>
            <Text variant='bodyMedium'>{specialty}</Text>
            <Text variant='bodyMedium'>{description}</Text>
            <Text variant='bodyMedium'>{hour}</Text>
            </View>
        </Card.Content>
        { showButtons && 
        <Card.Actions>
          <Button
            style = {styles.button}
            textColor={Colors.BLACK}
            onPress={navProfile}
            >
            Ir al Perfil
          </Button>
          <Button
            style = {styles.button}
            buttonColor={Colors.SECONDARY_BLUE}
            onPress={navAppointment}
            >
            Crear cita
          </Button>
        </Card.Actions>
        }
        </Card>
    )
}
export default DoctorCard;

const styles = StyleSheet.create({
    button: {
      width: 100,
      height:100,
      marginRight:10,
      backgroundColor: '#2196F3'
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
        backgroundColor: '#FFF',
        margin: 10
      },
  });
