import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { Button, FAB, Portal, Text, TextInput } from 'react-native-paper';
//import PhoneVerification from ''./components/PhoneVerificatorCopy'';

const SignUp = ({navigation}) => {

    const [names, setNames] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [phoneComponent, setPhoneComponent] = React.useState(false);
    const [codeValidationComponent, setCodeValidationComponent] = React.useState(false);
    const [signUpComponent, setSignUpComponent] = React.useState(true);

    const handlePreviousButton = () =>{
      if(phoneComponent){
        setPhoneComponent(false);
        setSignUpComponent(true);
      }else if(codeValidationComponent){
        setCodeValidationComponent(false);
        setPhoneComponent(false);
      }
    }
    const handleNextButton = () =>{
      if(phoneComponent){
        setPhoneComponent(false);
        setCodeValidationComponent(true);
      }else if(codeValidationComponent){
        setCodeValidationComponent(false);
      }
    }
    const handleSignUpButton = () =>{
      setPhoneComponent(true);
      setSignUpComponent(false);
    }
    return(
      <>
      <View>
        {/*honeComponent && <PhoneVerification/>*/}
        {signUpComponent && <>
        <View style={homeStyles.centerView}>
          <Text variant='headlineLarge'>Create an Account</Text>
          <Text variant='bodySmall'>Sign up</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-evenly', marginTop:'10%' }}>
        </View>
        <View style={homeStyles.centerView}>
          <Text style={homeStyles.circle}>Or</Text>
        </View>
        <View style={{marginLeft:'15%', marginRight: '15%'}}>
          <TextInput
            label='Nombres'
            mode={'outlined'}
            outlineStyle={homeStyles.textInput}
            value={names}
            onChangeText={names => setNames(names)}
          />
          <TextInput
            label='Apellidos'
            mode={'outlined'}
            outlineStyle={homeStyles.textInput}
            value={lastName}
            onChangeText={lastName => setLastName(lastName)}
          />
          <TextInput
            label='Telefono'
            mode={'outlined'}
            secureTextEntry={true}
            outlineStyle={homeStyles.textInput}
            value={phone}
            onChangeText={phone => setPhone(phone)}
          />
          <Button
            style={homeStyles.buttonSignInContainer}
            mode='contained'
            onPress = {() =>handleSignUpButton()}>
          Sign up
          </Button>
        </View></>}
      </View>
      {phoneComponent && <><Button
        style={homeStyles.textButtonLeft}
        mode='text'
        onPress = {() =>handlePreviousButton()}>
      {'< Previous'}
      </Button>
      <Button
        style={homeStyles.textButton}
        mode='text'
        onPress = {() =>handleNextButton()}>
      {codeValidationComponent ? 'finish >' : 'Next >'}
    </Button></>}    
    </>
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
    },
    textButton: {
      position: 'absolute',
      bottom: 0,
      margin: 16,
      right: 0,
    },
    textButtonLeft: {
      position: 'absolute',
      bottom: 0,
      margin: 16,
      left: 0,
    }
  });
