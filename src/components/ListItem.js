import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import * as theme from "../styles/theme";

const App = ({ text, onPress, selected }) =>{
  return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.mainContainer}>
            <View style={[styles.container, selected ? styles.selected : {}]}>
                 <Text style={[styles.text, selected ? styles.selectedText : {}]}>{ text }</Text>
            </View>
        </View>
        
    </TouchableOpacity>
  )
}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    
    mainContainer:{
        flex:1,
        alignItems:"center"
    },
    container:{
      width: width - 30,
      paddingVertical:12,
      paddingHorizontal:8,
      marginVertical:5,
      marginTop:12, 

      flex:1,
      justifyContent:'center',
      
      borderWidth: 0.5,
      borderRadius: 5,

      backgroundColor: theme.COLORS.WHITE,
      color: theme.COLORS.BLACK,

      shadowColor: theme.COLORS.BLACK,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    selected:{
      backgroundColor: theme.COLORS.PRIMARY,
    },
    text: {
        fontSize: 22,
        fontFamily: theme.FONT.DEFAULT_FONT_FAMILY,
    },
    selectedText: {
      color: theme.COLORS.WHITE,
  }
})

export default App