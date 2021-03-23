import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';
import Textarea from 'react-native-textarea';
import DropDownPicker from 'react-native-dropdown-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function addMaterial(){
 return(
     <View style={styles.formContainer}>
        <TextInput placeholder="Material" style={styles.input}/>
        <TextInput placeholder="Price"style={styles.input} keyboardType="numeric" />
        <TextInput placeholder="date" style={styles.input} keyboardType="date"/>
        <DropDownPicker style={styles.drapdown}  items={[ {label: 'Herat', value: 'Herat',selected:'slected'},
        {label:'Kabu',value:'Kabul'},
        {label:'Bamyan', value:'Bamyan'}
         ]} />
        <Textarea containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={120}
           placeholder={'Description . . .'}
         />
        <TouchableOpacity style={[styles.btn,{backgroundColor:'blue'}]}>
            <Text style={styles.btnTxt}>Save</Text>
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