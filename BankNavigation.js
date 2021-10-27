import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Country from './screens/Country.js';
import Detail from './screens/Detail.js';
import Detail5 from './screens/Detail5.js';
import Details from './screens/Details.js';
import Details2 from './screens/Details2.js';
import Details3 from './screens/Details3.js';
import Detaisl6 from './screens/Detaisl6.js';
import Identity from './screens/Identity.js';
import Local from './screens/Local.js';
import LocalTransfer from './screens/LocalTransfer.js';
import Login from './screens/Login.js';
import MobileNumber from './screens/MobileNumber.js';
import OnlineBusiness from './screens/OnlineBusiness.js';
import Register from './screens/Register.js';
import SignUp from './screens/SignUp.js';
import ss from './screens/ss.js';

export default class BankNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Country"
            component={Country}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail5"
            component={Detail5}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details2"
            component={Details2}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Details3"
            component={Details3}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detaisl6"
            component={Detaisl6}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Identity"
            component={Identity}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Local"
            component={Local}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LocalTransfer"
            component={LocalTransfer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MobileNumber"
            component={MobileNumber}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OnlineBusiness"
            component={OnlineBusiness}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ss"
            component={ss}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
