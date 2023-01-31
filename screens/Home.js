import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, FAB, Portal, TextInput } from 'react-native-paper';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const Home = ({navigation}) => {
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
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  })
  .catch((error) => {
    console.log(error);
  });

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    /*const checkPermissions = () => {
      request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION, {
        title: "Permission for Captureeeee Extraaaodrinary Application",
        message:
        "For your beautiful pictures, " +
        "Grant permission to Captureeeee Extraaaordinary Application",
        buttonNeutral: "Not Right Now!",
        buttonNegative: "Cancel",
        buttonPositive: "Alright"
        }).then((result) => {
        //setPermissionResult(result)
        console.log(result)
      });
    }*/

    return(
      <View>
        <View style={homeStyles.view}>
          <Button
            style={homeStyles.buttonFacebookContainer}
            mode="contained"
            icon={require('./src/facebook.png')} 
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
            Sign in with Facebook
          </Button>
          <Button
            style={homeStyles.buttonTwitterContainer}
            mode="contained"
            icon={require('./src/twitter.png')} 
            onPress = {
                () =>{
                    navigation.navigate('SignUp')
                }}>
            Sign in with Twitter
          </Button>
          <Button
            style={homeStyles.buttonGoogleContainer}
            mode="contained"
            icon={require('./src/google.png')} 
            onPress = {
                () =>{
                  checkPermissions()
                }}>
          Sign in with Google
          </Button>
          <Text style={homeStyles.circle}>Or</Text>
        </View>
        <View style={{marginLeft:'15%', marginRight: '15%'}}>
          <TextInput
            label="Username"
            mode={'outlined'}
            outlineStyle={homeStyles.textInput}
            value={userName}
            onChangeText={userName => setUserName(userName)}
          />
          <TextInput
            label="Password"
            mode={'outlined'}
            secureTextEntry={true}
            outlineStyle={homeStyles.textInput}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Sign in
          </Button>
        </View>
      </View>   
    )
}
export default Home;

const homeStyles = StyleSheet.create({
    buttonFacebookContainer: {
      backgroundColor: '#3b5998',
      borderRadius: 100,
      width: '70%',
      height: 50,
      margin: 10,
      display: 'flex',
      justifyContent: 'center'
    },
    buttonTwitterContainer: {
      backgroundColor: '#00acee',
      borderRadius: 100,
      width: '70%',
      height: 50,
      display: 'flex',
      justifyContent: 'center'
    },
    buttonGoogleContainer: {
      backgroundColor: '#BE3C2E',
      borderRadius: 100,
      width: '70%',
      height: 50,
      margin: 10,
      display: 'flex', 
      justifyContent: 'center'
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
    buttonText:{
      color: "black"
    },
    circle: {
      borderRadius: 50,
      width: 50,
      height: 50,
      padding: 15,
      backgroundColor: '#fff',
      borderWidth: 1,
      color: '#000',
      textAlign: 'center'
    },
    view: {
      justifyContent:'center', 
      alignItems:'center',
      marginTop:'10%'
    }
  });
