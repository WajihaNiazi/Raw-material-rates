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

export default function Item({name,price,MOQ,date,img,onPress}){
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
         <View style={styles.itmeInfo}>
              <Image style={styles.image}  source={img} />
           <View style={styles.detail}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>{price} AFG</Text>
                <Text style={styles.moq}>MOQ : {MOQ}</Text>
                <Text style={styles.date}>Sine {date}</Text>
            </View>
        </View>
      </TouchableOpacity>
     
    )

}


const styles =StyleSheet.create({
    container:{
    
     
    },
    itmeInfo:{
      flexDirection:'row',
      paddingVertical:16,
      paddingHorizontal:10,
      boxShadow:'3px 3px 8px 0 rgba(0, 0, 0, 0.1), 3px 3px 8px 0 rgba(0, 0, 0, 0.1)',
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
    image:{
        width:150,
        marginRight:20
    }

   
})