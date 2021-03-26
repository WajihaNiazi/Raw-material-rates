import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
export default function ReportItem({location,message,name,shopNumber}){
    return (
      <View  style={styles.container}>
         <View style={styles.itmeInfo}>
           <View style={styles.detail}>
                <Text style={styles.repotLocation,{fontWeight:'bold'}}>Name:</Text>
                <Text style={styles.repotLocation}>{name}</Text>
                <Text style={styles.repotLocation,{fontWeight:'bold'}}>Location: </Text>
                <Text style={styles.repotLocation}>{location}</Text>
                <View>
                  <Text style={styles.repotLocation,{fontWeight:'bold'}}>Shop Number:</Text>
                  <Text style={styles.repotLocation}>{shopNumber}</Text>
                  <Text style={styles.repotLocation,{fontWeight:'bold'}}>Message:</Text>
                  <Text style={styles.message}> {message}</Text>
                </View>
            </View>
        </View>
      </View> 
    )
}
const styles =StyleSheet.create({
    container:{
      width:"100%",
	    height:"100%",
      backgroundColor:"#fff"
    },
    itmeInfo:{
      boxShadow:'3px 3px 8px 0 rgba(0, 0, 0, 0.1), 3px 3px 8px 0 rgba(0, 0, 0, 0.1)',
      paddingHorizontal:20,
      paddingVertical:20,
      margin:20
      
    },
    repotLocation :{
      fontSize:20
    },
    message:{
      color:'gray',
      fontSize:16
    }
})