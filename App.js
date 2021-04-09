import React from "react";
import 'react-native-gesture-handler';
import AppNavigator from "./src/navigations/AppNavigator";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default ()=>{
  return(
    <Provider store={store} >
      <AppNavigator/>
    </Provider>
    
  )
  
}