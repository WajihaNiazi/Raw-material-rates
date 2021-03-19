import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import { Feather } from "@expo/vector-icons";
// const db = SQLite.openDatabase('productRate.db')

export default function ProductDetails({name,price,MOQ,date,img,detail,location}){
    return (
      <View style={styles.container}>
         <View style={styles.imgContainer}>
            <Image style={styles.img} source={img} />
        </View>
        <View style={styles.itmeInfo}>
           <View style={styles.detail}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>Price : {price} AFG</Text>
                <Text style={styles.moq}>MOQ : {MOQ}</Text>
                <Text style={styles.date}>Sine {date}</Text>
                <Text style={styles.date}>Location {location}</Text>
            </View>
        </View>
        <View style={styles.itmeDetail}>
                   <Text style={styles.heading}>Material Details</Text> 
                   <Text style={styles.info}>{detail}</Text>
         </View>
      </View>
     
    )

}


const styles =StyleSheet.create({
    container:{
       
     
    },
    itmeInfo:{
      flexDirection:'row',
      paddingVertical:16,
      paddingHorizontal:10,
      marginVertical:5,
      
      backgroundColor:'white'
    },
    productName :{
      fontWeight:'bold',
      fontSize:20
    },
    productPrice :{
      fontWeight:'bold',
      fontSize:20
    },
    moq:{
      color:'gray',
      fontSize:16
    },
    date:{
      color:'gray',
      fontSize:16
    },
    imgContainer:{
        flexDirection:'row',
        paddingHorizontal:5,
        marginVertical:5,
        justifyContent:'center',
        borderBottomWidth:0.1 ,
        borderBottomColor:'#669999',
        backgroundColor:'white'
        
    },
    img:{
        height:300,
        width:360
    },
    itmeDetail:{ 
        paddingVertical:16,
        paddingHorizontal:10,
        marginVertical:5,
        justifyContent:'center',
   
      backgroundColor:'white'
    },
    heading:{
        fontSize:20,
        color:'#0059b3'
    },
    info:{
        fontSize:16
    }

   
})