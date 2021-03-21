import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
// const db = SQLite.openDatabase('productRate.db')
export default function AddReportScreen(props){
  const navigation = useNavigation();
  const {route} = props;
  const {item} = route.params;
  const {id} = item; 

    return (
      <View  style={styles.formContainer}>
        {/* <Text>{id}</Text> */}
          <TextInput 
            placeholder="Location" 
            style={styles.input}
            //  value={name} 
            // onChangeText={(name)=>setName(name)}
          />
          <TextInput 
              placeholder="shopNumber"
              style={styles.input}  
            //  value={email} 
            //  onChangeText={(email)=>setEmail(email)}
          />
          <TextInput 
            placeholder="Message" 
            style={styles.input} 
            // value={phone} 
            // onChangeText={(phone)=>setPhone(phone)} 
          />
           <TouchableOpacity style={[styles.button,{backgroundColor:Colors.primary}]}>
               <Text style={styles.buttonTxt} 
              //  onPress={()=>addContact(name,phone,email)}
               >Save</Text>
           </TouchableOpacity>
           <TouchableOpacity 
            style={[styles.button,{backgroundColor:'red'}]} 
            onPress={()=> navigation.navigate('ProductScreen')}
            >
               <Text style={styles.buttonTxt}>Cancel</Text>
           </TouchableOpacity>
      </View>
    )

}
const styles =StyleSheet.create({
  formContainer:{
    borderRadius:0,
    marginTop:60,
    paddingVertical:20,
    paddingHorizontal:40,
    backgroundColor:Colors.white
},
input:{
    paddingBottom:10,
    marginBottom:10,
    borderBottomColor:Colors.secondary,
    borderBottomWidth:1
},
button:{
    padding:20,
    marginTop:20,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
},
buttonTxt:{
    color:Colors.white,
}
   
})