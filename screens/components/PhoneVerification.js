import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Text, TextInput } from 'react-native-paper';

const PhoneVerification = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
      <View>
        <View style={homeStyles.centerView}>
          <Text variant='headlineSmall'>Phone Number Verification</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:'10%' }}>
          <Button
            style={homeStyles.buttonGoogleContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Google
          </Button>
        </View>
        <View style={{marginLeft:'15%', marginRight: '15%'}}>
          <TextInput
            label="Phone number"
            outlineStyle={homeStyles.textInput}
            value={userName}
            onChangeText={userName => setUserName(userName)}
          />
          <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Sign up
          </Button>
        </View>
        {/*<View style={{marginLeft:'15%', marginRight: '15%'}}>
        <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Sign up
          </Button>          <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Sign up
          </Button>
              </View>*/}
      </View>   
    )
}
export default PhoneVerification;

const homeStyles = StyleSheet.create({
    buttonGoogleContainer: {
      backgroundColor: '#BE3C2E',
      borderRadius: 100,
      height: 50,
      display: 'flex', justifyContent: 'center'
    },
    buttonSignInContainer: {
      backgroundColor: '#2ECC71',
      borderRadius: 100,
      height: 50,
      marginTop: 10,
      display: 'flex', 
      justifyContent: 'center'
    },
    textInput:{
      borderRadius: 100,
    },
    circle: {
      borderRadius: 50,
      width: 50,
      height: 50,
      padding: 15,
      backgroundColor: '#fff',
      borderWidth: 1,
      color: '#000',
      textAlign: 'center',
    },
    centerView: {
      justifyContent:'center', 
      alignItems:'center',
      marginTop:'5%'
    }
  });
