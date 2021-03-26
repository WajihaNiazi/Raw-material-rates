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
import { Feather } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Textarea from 'react-native-textarea';

import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material_rates.db');//for db

export default function AddReportScreen(props){
  const navigation = useNavigation();
  const {route} = props;
  const {item} = route.params;
  const {id} = item; 
  const [name, setName]=useState(null);
  const [location, setLocation]=useState(null);
  const [shopNumber, setShopNumber]=useState(null);
  const [message, setMessage]=useState(null);
  const addReport=(name,location,shopNumber,message,id)=>{
    // console.log('inserted!');

    db.transaction(tx=>{
        tx.executeSql('insert into report(name, location,message,shopNumber,material_id) values(?,?,?,?,?);',[name,location,shopNumber,message,id],
        ()=>navigation.navigate('Report'));
        console.log("ttt");
        // console.log([name,location,shopNumber,message,id]);
      
      })
}
    return (
      <View  style={styles.formContainer}>
        {/* <Text>{id}</Text> */}
          <TextInput 
            placeholder="Location" 
            style={styles.input}
            value={location} 
            onChangeText={(location)=>setLocation(location)}
          />
          <TextInput 
              placeholder="Name"
              style={styles.input}  
              value={name} 
              onChangeText={(name)=>setName(name)}
          />
          <TextInput 
              placeholder="shopNumber"
              style={styles.input}  
              value={shopNumber}
              onChange={(shopNumber)=>setShopNumber(shopNumber)}
          />
          <Textarea 
            containerStyle={styles.textareaContainer}
              style={styles.textarea}
              value={message}
              onChange={(message)=>{setMessage(message)}}
              maxLength={130}
              placeholder={'Message . . .'}
          />
           <TouchableOpacity style={[styles.button,{backgroundColor:Colors.primary}]}>
               <Text style={styles.buttonTxt} 
               onPress={()=>addReport(name,location,shopNumber,message,id)}
               >Save</Text>
           </TouchableOpacity>
           <TouchableOpacity 
            style={[styles.button,{backgroundColor:'red'}]} 
            onPress={()=> navigation.navigate('Report')}
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
buttonTxt:{
    color:Colors.white,
}
   
})