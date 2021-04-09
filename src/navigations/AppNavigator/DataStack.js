import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import * as theme from "../../styles/theme";
import DataScreen from "../../screens/data";

const Stack = createStackNavigator();

export default ()=> {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Data" component={DataScreen} 
          options={{headerTintColor: theme.COLORS.HEADER_TITLE, 
                    headerStyle:{backgroundColor:theme.COLORS.PRIMARY},
                    headerTitleStyle: {
                         fontWeight: 'bold',
                        },
                    }}
          />
        </Stack.Navigator>
    );
}