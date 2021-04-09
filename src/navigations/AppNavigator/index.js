import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as theme from "../../styles/theme";

//Stacks
import HomeStack from "./HomeStack";
import DataStack from "./DataStack";
import AboutStack from "./AboutStack";

const tabBarIcon = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Data') {
        iconName = focused ? 'eye' : 'eye-outline';
      }else if (route.name === 'About') {
        iconName = focused ? 'information-circle' : 'information-circle-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={"Home"} 
        screenOptions={tabBarIcon}
          tabBarOptions={{
            activeTintColor: theme.COLORS.PRIMARY,
            inactiveTintColor:  theme.COLORS.PRIMARY,
            
          }}>
        <Tab.Screen name="Data" component={DataStack} options={{title:""}} />
        <Tab.Screen name="Home" component={HomeStack} options={{title:""}}/>
        <Tab.Screen name="About" component={AboutStack} options={{title:""}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}