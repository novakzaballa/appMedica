import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Text, TextInput } from 'react-native-paper';
import PhoneVerification from "./components/PhoneVerification";

const SignUp = ({navigation}) => {

    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [phoneComponent, setPhoneComponent] = React.useState(false);

    return(
      <View>
        {phoneComponent && <PhoneVerification/>}
        <View style={homeStyles.centerView}>
          <Text variant='headlineLarge'>Create an Account</Text>
          <Text variant='bodySmall'>Sign up with your social media account or email address</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:'10%' }}>
          <Button
            style={homeStyles.buttonFacebookContainer}
            mode="contained"
            icon={require('./src/facebook.png')} 
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
            Facebook
          </Button>
          <Button
            style={homeStyles.buttonTwitterContainer}
            mode="contained"
            icon={require('./src/twitter.png')} 
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
            Twitter
          </Button>
          <Button
            style={homeStyles.buttonGoogleContainer}
            mode="contained"
            icon={require('./src/google.png')} 
            onPress = {
                () =>{
                    navigation.navigate('Tabs')
                }}>
          Google
          </Button>
        </View>
        <View style={homeStyles.centerView}>
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
            label="Email Address"
            mode={'outlined'}
            outlineStyle={homeStyles.textInput}
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TextInput
            label="Password"
            mode={'outlined'}
            secureTextEntry={true}
            outlineStyle={homeStyles.textInput}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <TextInput
            label="Confirm Password"
            mode={'outlined'}
            secureTextEntry={true}
            outlineStyle={homeStyles.textInput}
            value={password}
            onChangeText={password => setPassword(password)}
          />
          <Button
            style={homeStyles.buttonSignInContainer}
            mode="contained"
            onPress = {() =>setPhoneComponent(!phoneComponent)}>
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
export default SignUp;

const homeStyles = StyleSheet.create({
    buttonFacebookContainer: {
      backgroundColor: '#3b5998',
      borderRadius: 100,
      height: 50,
      display: 'flex', justifyContent: 'center'
    },
    buttonTwitterContainer: {
      backgroundColor: '#00acee',
      borderRadius: 100,
      height: 50,
      display: 'flex', justifyContent: 'center'
    },
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