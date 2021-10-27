import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import App from './App.js';
import customizeWatch from './customizeWatch.js';
import Strap from './Strap.js';
import PaymentProceed from './PaymentProceed.js';
import ProceedScreen from './ProceedScreen.js';
import CustomizedText from './CustomizedText.js';
import gettingStarted from './gettingStarted.js';
import weWelcome from './weWelcome.js';

export default class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="gettingStarted"
            component={gettingStarted}
            options={{headerShown: false}}
          />
          <Stack.Screen
            gettingStarted
            name="App"
            component={App}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="customizeWatch"
            options={{headerShown: false}}
            component={customizeWatch}
          />
          <Stack.Screen
            name="Strap"
            options={{headerShown: false}}
            component={Strap}
          />

          <Stack.Screen
            name="CustomizedText"
            options={{headerShown: false}}
            component={CustomizedText}
          />
          <Stack.Screen
            name="PaymentProceed"
            options={{headerShown: false}}
            component={PaymentProceed}
          />

          <Stack.Screen
            name="ProceedScreen"
            options={{headerShown: false}}
            component={ProceedScreen}
          />
          <Stack.Screen
            name="weWelcome"
            options={{headerShown: false}}
            component={weWelcome}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
