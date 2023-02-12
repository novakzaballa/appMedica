import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Button, FAB, Portal, TextInput } from 'react-native-paper';
import Colors from './src/utilitis/Colors';

const LogIn = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");

    return(
      <View>
        <View style={homeStyles.view}>
          <Button
            style={homeStyles.buttonTwitterContainer}
            mode="contained"
            icon={require('./src/twitter.png')} 
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
            Sign in with Twitter
          </Button>
          <Text style={homeStyles.circle}>Or</Text>
        </View>
        <View style={{marginLeft:'15%', marginRight: '15%'}}>
          <TextInput
            label="Username"
            mode={'outlined'}
            outlineStyle={homeStyles.textInput}
            activeOutlineColor={Colors.SECUNDARY_BLUE}
            value={userName}
            onChangeText={userName => setUserName(userName)}
          />
          <TextInput
            label="Password"
            mode={'outlined'}
            secureTextEntry={true}
            outlineStyle={homeStyles.textInput}
            activeOutlineColor={Colors.SECUNDARY_BLUE}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {
                () =>{
                    navigation.navigate('Home')
                }}>
          Sign in
          </Button>
        </View>
      </View>   
    )
}
export default LogIn;

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
      borderColor: '#2196F3'
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