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
import ProductDetials from '../components/productDetails';
const image=require('../assets/f.jpg');
export default function ProductDetail(props){
  const {route} =props;
  const {item}=route.params;
  const {name, img, detail,location,price,date,MOQ}=item
    return (
      <View style={styles.container}>
         <ProductDetials name={name} img={img}  detail={detail} location={location} price={price} date={date} MOQ={MOQ} />
      </View>
    )

}
const styles =StyleSheet.create({
    container:{
      backgroundColor:'#f2f2f2',
      width:"100%",
	    height:"100%"
    }
   
})