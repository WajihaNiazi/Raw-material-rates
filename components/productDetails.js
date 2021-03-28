import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material.db');//for db

import {useNavigation} from '@react-navigation/native'
export default function ProductDetails({id,name,price,date,unit,location,detail,img}){
 const navigation = useNavigation()
  const deleteMaterial=()=>{
    db.transaction(tx=>{
        tx.executeSql('delete from material where id=?',[id],()=>navigation.navigate("List_Of_Materials"));
    })
} 
    return (
      <View style={styles.container}>
         <View style={styles.imgContainer}>
            <Image style={styles.img} source={img} />
        </View>
        <View style={styles.itmeInfo}>
           <View style={styles.detail}>
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>Price : {price} AFG</Text>
                <Text style={styles.moq}>Unit : {unit}</Text>
                <Text style={styles.date}>Sine {date}</Text>
                <Text style={styles.date}>Location {location}</Text>
            </View>
        </View>
        <View style={styles.itmeDetail}>
            <Text style={styles.heading}>Material Details</Text> 
            <Text style={styles.info}>{detail}</Text>
            

          <TouchableOpacity style={[styles.btn,{backgroundColor:'#127bb8'}]} >

            <Text style={styles.btnTxt} onPress={()=>{
              navigation.navigate('AddReport',{id:id})
              }}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn,{backgroundColor:'red'}]} >
            <Text style={styles.btnTxt} onPress={deleteMaterial} >Delete</Text>
        </TouchableOpacity>
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
    },
    btn:{
      padding:10,
      marginTop:20,
      borderRadius:5,
      justifyContent:'center',
      alignItems:"center",
      
  },
  btnTxt:{
      color:'white',
      fontWeight:'bold'
  }

   
})