import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import ForecastDay from '../screen/ForecastDay';
import Warning14 from '../screen/Warning14';
import Location from '../screen/Location';
import Setting from '../screen/Setting';
import Forecast14 from '../screen/Forecast14';
import SettingTemp from '../screen/SettingTemp';
import SettingLanguage from '../screen/SettingLanguage';


const Stack = createStackNavigator();
export class AppStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForecastDay"
            component={ForecastDay}
            options={{headerShown: false}}
          />

        <Stack.Screen
            name="Warning14"
            component={Warning14}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Setting"
            component={Setting}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Forecast14"
            component={Forecast14}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SettingTemp"
            component={SettingTemp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SettingLanguage"
            component={SettingLanguage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppStack;
