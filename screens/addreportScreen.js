import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';
import Colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material_rate.db');//for db

export default function AddReportScreen(props){
  const navigation = useNavigation();

  const {route} = props;

  const {id} = route.params;

  const [name, setName]=useState(null);
  const [location, setLocation]=useState(null);
  const [shopNumber, setShopNumber]=useState(null);
  const [message, setMessage]=useState(null);
  const addReport=(name,location,shopNumber,message)=>{
    console.log('inserted!')
    db.transaction(tx=>{
        tx.executeSql('insert into tableReport(reportname,reportlocation,shopNumber,message,material_id) values(?,?,?,?,?);',
        [name,location,shopNumber,message,id],()=>navigation.navigate('Report'));
      });
    }
    return (
      <View  style={styles.formContainer}>
        {/* <Text>{id}</Text> */}
          <TextInput 
              placeholder="Name"
              style={styles.input}  
              value={name} 
              onChangeText={(name)=>setName(name)}
          />
          <TextInput 
            placeholder="Location" 
            style={styles.input}
            value={location} 
            onChangeText={(location)=>setLocation(location)}
          />
          <TextInput 
              placeholder="Shop Number"
              style={styles.input}  
              value={shopNumber} 
              onChangeText={(shopNumber)=>setShopNumber(shopNumber)}
          />
          <Textarea
              placeholder="Message...."
              containerStyle={styles.textareaContainer}
              style={styles.textarea} 
              value={message}
              maxLength={130}
              onChangeText={(message)=>{setMessage(message)}}
          />
           <TouchableOpacity 
              style={[styles.btn,{backgroundColor:'blue'}]}  
              onPress={()=>addReport(name,location,shopNumber,message)}>
               <Text style={styles.btnTxt}>Save</Text>
           </TouchableOpacity>
           <TouchableOpacity 
            style={[styles.btn,{backgroundColor:'red'}]}  
            onPress={()=> navigation.navigate('ProductScreen')}>
            <Text style={styles.btnTxt}>Cancel</Text>
           </TouchableOpacity>
      </View>
    )
}
const styles =StyleSheet.create({
  formContainer:{
    borderRadius:30,
    marginTop:60,
    paddingVertical:20,
    paddingHorizontal:40,
    backgroundColor:Colors.white
},
input:{
  padding:10,
  marginBottom:10,        
  border:'1px solid  gray ',
  borderRadius:5
},
button:{
    padding:20,
    marginTop:20,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center'
},
textareaContainer: {
  height: 180,
},
textarea: {
  textAlignVertical: 'top',  // hack android
  height: 170,
  fontSize: 14,
  padding:10,
  border:'1px solid  gray ',
  borderRadius:5


},
btn:{
  padding:10,
  marginTop:20,
  borderRadius:5,
  justifyContent:'center',
  alignItems:"center"
},
btnTxt:{
  color:'white',
  fontWeight:'bold'
},
   
})