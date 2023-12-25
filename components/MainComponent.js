import { View, Text } from 'react-native'
import React from 'react'
import HostCountry from './HostCountry';
import DetailsScreen from './DetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import EditScreen from './EditScreen';

const MainComponent = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='HostCountry' >
                <Stack.Screen options={{ headerShown: false }} name='HostCountry' component={HostCountry} />
                <Stack.Screen options={{ headerShown: false }} name='DetailsScreen' component={DetailsScreen} /> 
                <Stack.Screen options={{ headerShown: false }} name='EditScreen' component={EditScreen} /> 
          </Stack.Navigator> 
      </NavigationContainer>
    )
}

export default MainComponent