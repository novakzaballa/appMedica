import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Tabs from '../screens/tabs'
import Appointment from '../screens/Appointment'
import SignUp from '../screens/SignUp'
import Map from './../screens/Map';
import Colors from '../screens/src/utilitis/Colors'
const Stack = createNativeStackNavigator()

const Stacks = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                  name='Home'
                  component={ Home }
                  options={{
                    headerStyle: {
                      backgroundColor: '#FF8B00',
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Stack.Screen
                  name='Profile'
                  component={ Profile }
                  options={{
                    headerStyle: {
                      backgroundColor: Colors.PRIMARY_BLUE,
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Stack.Screen
                  name='Tabs'
                  component={ Tabs }
                  options={{
                    headerStyle: {
                      backgroundColor: Colors.PRIMARY_BLUE,
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Stack.Screen
                  name='SignUp'
                  component={ SignUp }
                  options={{
                    headerStyle: {
                      backgroundColor: Colors.PRIMARY_BLUE,
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Stack.Screen
                  name='Map'
                  component={ Map }
                  options={{
                    headerStyle: {
                      backgroundColor: Colors.PRIMARY_BLUE,
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
                <Stack.Screen
                  name='Appointment'
                  component={ Appointment }
                  options={{
                    headerStyle: {
                      backgroundColor: Colors.PRIMARY_BLUE,
                      title: 'New Appointment'
                    },
                    headerTintColor: Colors.WHITE,
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Stacks;