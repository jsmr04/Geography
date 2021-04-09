import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from "../../styles/theme";
import AboutScreen from "../../screens/about";

const Stack = createStackNavigator();

export default ()=> {
    return (
        <Stack.Navigator>
          <Stack.Screen name="About" component={AboutScreen} 
          options={{headerTintColor: theme.COLORS.HEADER_TITLE, 
                    headerStyle:{backgroundColor:theme.COLORS.PRIMARY},
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }}/>
        </Stack.Navigator>
    );
}