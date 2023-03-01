import React from 'react';
import {Avatar, Button, TextInput} from 'react-native-paper';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import Colors from './src/utilitis/Colors';

const UserProfile = ({navigation}) => {

  return (
    <View style={styles.scene}>
      <View style={styles.container}>
        <Avatar.Text
          size={150}
          label="DD"
          color="black"
          style={{backgroundColor: Colors.PRIMARY_BLUE}}
        />
        <SafeAreaView style={styles.container2}>
          <TextInput
            style={styles.textField}
            underlineColor={Colors.SECONDARY_BLUE}
            activeUnderlineColor={Colors.SECONDARY_BLUE}
            underlineStyle={{backgroundColor: Colors.SECONDARY_BLUE}}
            textColor={Colors.BLACK}
            label="Nombres"
          />
          <TextInput
            style={styles.textField}
            underlineColor={Colors.SECONDARY_BLUE}
            activeUnderlineColor={Colors.SECONDARY_BLUE}
            underlineStyle={{backgroundColor: Colors.SECONDARY_BLUE}}
            textColor={Colors.BLACK}
            label="Apellidos"
          />
          <TextInput
            style={styles.textField}
            underlineColor={Colors.SECONDARY_BLUE}
            activeUnderlineColor={Colors.SECONDARY_BLUE}
            underlineStyle={{backgroundColor: Colors.SECONDARY_BLUE}}
            textColor={Colors.BLACK}
            label="Telefono"
          />
          <TextInput
            style={styles.textField}
            underlineColor={Colors.SECONDARY_BLUE}
            activeUnderlineColor={Colors.SECONDARY_BLUE}
            underlineStyle={{backgroundColor: Colors.SECONDARY_BLUE}}
            textColor={Colors.BLACK}
            label="Correo"
          />
          <Button mode="contained" buttonColor={Colors.SECONDARY_BLUE}>
            Guardar
          </Button>
        </SafeAreaView>
      </View>
    </View>
  );
};
export default UserProfile;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '10%',
    flexDirection: 'column',
  },
  container2: {
    marginTop: 10,
    width: '90%',
  },
  button: {
    width: 200,
    height: 40,
    marginTop: 10,
    marginRight: 10,
  },
  textField: {
    marginVertical: 10,
    borderColor: Colors.PRIMARY_BLUE,
    backgroundColor: Colors.OFF_WHITE,
  },
});
