import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image, Button,
    FlatList
} from 'react-native';
import Textarea from 'react-native-textarea';
import DropDownPicker from 'react-native-dropdown-picker';
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material.db');//for db

export default function addMaterial({navigation}){
    const [name, setName]=useState(null);
    const [price, setPrice]=useState(null);
    const [location, setLocation]=useState(null);
    const [date, setDate]=useState(null);
    const [detail, setDetail]=useState(null);
    const [unit, setUnit]=useState(null);

    const addMaterialFun=(name,price,date,unit,location,detail)=>{
        // console.log('inserted!');

        db.transaction(tx=>{
            console.log('inserted!')
            tx.executeSql('insert into material(name,price,date,unit, location,detail) values(?,?,?,?,?,?);',[name,price,date,unit,location,detail],()=>navigation.navigate('List_Of_Materials'));
        })
    }
 return(
     <View style={styles.formContainer}>
        <TextInput placeholder="Material" style={styles.input} value={name} onChangeText={(name)=>{setName(name)}}/>
        <TextInput placeholder="Price"style={styles.input} keyboardType="numeric" value={price} onChangeText={(price)=>{setPrice(price)}}/>
        <TextInput placeholder="date" style={styles.input} keyboardType="date" value={date} onChangeText={(date)=>{setDate(date)}}/>
        <TextInput placeholder="Unit" style={styles.input} value={unit} onChangeText={(unit)=>{setUnit(unit)}}/>
        <DropDownPicker 
         onChangeItem={(location)=>{setLocation(location.value)}}
         style={styles.drapdown} 
          items={[ {label: 'Herat', value: 'Herat',selected:true},
        {label:'Kabul',value:'Kabul'},
        {label:'Bamyan', value:'Bamyan'}
         ]} />
        <Textarea value={detail}  onChangeText={(detail)=>{setDetail(detail)}}
        containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={130}
           placeholder={'Description . . .'}
         />
        
        <TouchableOpacity style={[styles.btn,{backgroundColor:'#127bb8'}]} >
            <Text style={styles.btnTxt} onPress={()=>addMaterialFun(name,price,date,unit,location,detail)}>Save</Text>
        </TouchableOpacity>
         <TouchableOpacity style={[styles.btn,{backgroundColor:'red'}]}>
            <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
    </View>
 )

}
const styles=StyleSheet.create({

  formContainer:{
      borderRadius:30,
      marginTop:60,
      paddingVertical:20,
      paddingHorizontal:40,
      backgroundColor:'white'
  },
  input:{
      padding:10,
      marginBottom:10,        
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
  drapdown:{
      borde:'none',
    borderBottom:'1px solid  gray ',
    padding:20,
    borderWidth:1,
    marginBottom:10,
    borderRadius:5

  }
})