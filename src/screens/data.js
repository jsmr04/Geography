import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native";
import { fetchGeoIP } from "../api";
import * as theme from "../styles/theme";
import RowText from "../components/Text";
import Title from "../components/Title";
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'

const App = ({ selection }) =>{
  const [data, setData] = useState([])
  const getData = async ()=>{
    const data = await fetchGeoIP()
    setData(data)

    console.log(data)
  }

  useEffect(()=>{
    getData()
  },[])

  const getRandom = () =>{
    return Math.floor(Math.random() * 999999)
  }

  const getSelectedNodes = () =>{
    let nodes = []
    let allNodesView = [];
    
    selection.selectionMap.forEach( (value, key, map) => {
      nodes.push(value)
    });

    nodes.forEach(item => {
      let tmp = (
        <View style={styles.row}  key = {getRandom()}>
            <Text> { item[0].name } </Text>
            <Ionicons name={"chevron-forward"} size={16} color={theme.COLORS.PRIMARY} />
            <Text> { item[1].name } </Text>
            <Ionicons name={"chevron-forward"} size={16} color={theme.COLORS.PRIMARY} />
            <Text> { item[2].name } </Text>
        </View>
      )
      allNodesView.push(tmp)
    })

    return allNodesView
  }

  return(
    <View style={ styles.container }>
      <ScrollView>
        <Title text={"Your Information"}/>
        <RowText label={"IP"} value={data.ip} />
        <RowText label={"Country Code"} value={data.country_code} />
        <RowText label={"Country Name"} value={data.country_name} />
        <RowText label={"Region Code"} value={data.region_code} />
        <RowText label={"Region Name"} value={data.region_name} />
        <RowText label={"City"} value={data.city} />
        <RowText label={"Zip"} value={data.zip_code} />
        <RowText label={"Time Zone"} value={data.time_zone} />
        <RowText label={"Latitude"} value={data.latitude} />
        <RowText label={"Longitude"} value={data.longitude} />
        <RowText label={"Metro Code"} value={data.metro_code} />

        <Title text={"Selected Nodes"}/>
          {getSelectedNodes()} 
      </ScrollView>
    </View>
  )
}

const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
    row:{
      width: width,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexDirection:'row',
      alignItems:'flex-start',
    },
    text:{
      fontFamily: theme.FONT.DEFAULT_FONT_FAMILY,
      fontSize: 20,
      width:'50%'
    },
    textRight:{
      textAlign:'right'
    },
    nodesView:{
      flex:1,
      backgroundColor:'blue'
    }
    
})

const mapStateToProps = state => {
  return {selection: state.selectionReducer};
};

export default connect(mapStateToProps)(App);
