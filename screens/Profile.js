import React from 'react';
import { Avatar, Button, Modal, Portal, Searchbar, Text } from 'react-native-paper';

import { StatusBar, StyleSheet, View } from 'react-native'

const Profile = ({navigation}) => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20, margin: 60};

    return(
        <View style={[styles.scene, { backgroundColor: '#fff' }]} >
        <Portal>
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
            <Text variant='displayLarge'>What does 'Verified' Means?</Text>
            <Text variant='bodySmall'>The verified icon means that our customer care staff, have thoroughly validated the identity, credentials, and location, of the doctor or health provider holding this account. Our company validates the above mentioned data when the health provider is registered in our platform for the first time, and once per year. </Text>
            <Button mode='text' onPress={hideModal}>
            Got it
            </Button>
          </Modal>
        </Portal>
        <View style={styles.container}>
          {<Avatar.Image size={100} source={require('./src/usuario.png')} style={styles.top}/>}
          <Text variant='headlineLarge'>Dr. Fernando Paniagua</Text>
          <Text>Dr. Paniagua has extensive experience in pediatrics. He coursed his major in UMSA, La Paz Bolivia, while completed his specialty in UNAM, Mexico D.F.</Text>
        </View>
        <Text>Today's availability</Text>
        <Button icon={require('./src/quality.png')} mode='text' onPress={showModal}>
        Verificado
        </Button>
      </View> 
    )
}
export default Profile;

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
    container: {
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:'15%'
    },
  
  });