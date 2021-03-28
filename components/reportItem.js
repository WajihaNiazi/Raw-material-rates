import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function ReportItem({location,message,name,shopNumber,productname,onDeleteReport}){
  const [textdata, setText]=useState(false);
    const toggleNumberOfLines = () => { 
      setText(!textdata);
    }
    return (
      <View  style={styles.container}>
         <View style={styles.itmeInfo}>
           <View style={styles.detail}>
                <Text style={styles.repotLocation}><Text style={styles.repotLocation,{fontWeight:'bold'}}>Name:</Text>{name}</Text>
                <Text style={styles.repotLocation}><Text style={styles.repotLocation,{fontWeight:'bold'}}>Location: </Text>{location}</Text>
                {
                  textdata ?
                    <View> 
                      <Text style={styles.repotLocation}><Text style={styles.repotLocation,{fontWeight:'bold'}}>Product Name: </Text>{productname}</Text>
                      <Text style={styles.repotLocation}><Text style={styles.repotLocation,{fontWeight:'bold'}}>Shop Number:</Text>{shopNumber}</Text>
                      <Text style={styles.repotLocation,{fontWeight:'bold'}}>Message:</Text>
                      <Text style={styles.message}> {message}</Text>
                      <View >
                        <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeleteReport}/>
                      </View>
                        <Text style={{color:'#127bb8'}} onPress={toggleNumberOfLines} > ReadLess</Text>
                    </View> 
                   : 
                   <Text style={{color:'#127bb8'}} onPress={toggleNumberOfLines}>ReadMore</Text>
                }
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
      margin:5
      
    },
    repotLocation :{
      fontSize:16
    },
    message:{
      color:'gray',
      fontSize:16
    }
})