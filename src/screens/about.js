import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const App = () =>{
  return(
    <View style={ styles.container }>
      <Title text={"About the developer"}/>
      <View style={styles.textContainer}>
      <Text style={styles.Text} >Hello,</Text>
      <Text></Text>
      <Text style={styles.Text}>My name is Jose, I am a software engineer from the Dominican Republic, throughout my career I have had the opportunity to learn and code on different platforms, such as .Net, SAP, SQL Server, Oracle, Android, etc.</Text>
      <Text></Text>
      <Text style={styles.Text}>I came to Canada to grow as a professional, during my time at Lambton College I have improved my skills as a mobile developer:</Text>
      <Text></Text>
      <Text style={[styles.Text, {fontWeight:'bold'}]}>Skills</Text>
      <Text></Text>
      <Text style={styles.Text}> - Cross-platform development</Text>
      <Text style={styles.Text}> - Android native development</Text>
      <Text style={styles.Text}> - Native iOS development</Text>
      <Text style={styles.Text}> - Backend development</Text>
      <Text></Text>
      <Text style={styles.Text}>I look forward to hearing from you.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    textContainer:{
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    Text:{
      textAlign:'justify',
      fontSize: 18
    }

})

export default App