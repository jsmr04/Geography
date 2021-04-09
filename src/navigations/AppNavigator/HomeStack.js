import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from "../../styles/theme";
import HomeScreen from "../../screens/home";

const Stack = createStackNavigator();

export default ()=> {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} 
          options={{headerTintColor: theme.COLORS.HEADER_TITLE, 
                    headerStyle:{backgroundColor:theme.COLORS.PRIMARY},
                    headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                    }}/>
        </Stack.Navigator>
    );
}