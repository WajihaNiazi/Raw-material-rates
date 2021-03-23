import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import { Feather } from "@expo/vector-icons";
// const db = SQLite.openDatabase('productRate.db')

export default function ReportItem({location,message}){
    return (
      <View  style={styles.container}>
         <View style={styles.itmeInfo}>
           <View style={styles.detail}>
                <Text style={styles.repotLocation}>{location}</Text>
                <Text style={styles.message}> {message}</Text>
            </View>
        </View>
      </View> 
    )
}
const styles =StyleSheet.create({
    container:{
      width:"100%",
	    height:"100%"
    },
    itmeInfo:{
      flexDirection:'row',
      paddingVertical:16,
      paddingHorizontal:10,
      boxShadow:'3px 3px 8px 0 rgba(0, 0, 0, 0.1), 3px 3px 8px 0 rgba(0, 0, 0, 0.1)',
      marginVertical:5,
      backgroundColor:'white'
    },
    repotLocation :{
      fontWeight:'bold',
      fontSize:20
    },
    message:{
      color:'gray',
      fontSize:16
    }
})