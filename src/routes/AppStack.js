import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/Home';
import Details from '../views/Details';
import Onboarding from '../views/Onboarding';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home} />
                <Screen name="Details" component={Details} />
                <Screen name="Onboarding" component={Onboarding} />
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;