import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import TabViewExample from '../screens/tabs'

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
                        headerTintColor: '#fff',
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
                          backgroundColor: '#FF8B00',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}
                    />
                <Stack.Screen
                    name='TabViewExample'
                    component={ TabViewExample }
                    options={{
                        headerStyle: {
                          backgroundColor: '#FF8B00',
                        },
                        headerTintColor: '#fff',
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