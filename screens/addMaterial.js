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
const db=SQLite.openDatabase('raw_material_rates.db');//for db

export default function addMaterial({navigation}){
    const [name, setName]=useState(null);
    const [price, setPrice]=useState(null);
    const [location, setLocation]=useState(null);
    const [date, setDate]=useState(null);
    const [detail, setDetail]=useState(null);
    const [image, setImage]=useState(null);
    

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

    const addMaterialFun=(name,price,date,location,detail,image)=>{
        // console.log('inserted!');

        db.transaction(tx=>{
            console.log('inserted!')
            tx.executeSql('insert into material(name, price,date, location,detail,image) values(?,?,?,?,?,?);',[name,price,date,location,detail,image],()=>navigation.navigate('ProductScreen'));
        })
    }
 return(
     <View style={styles.formContainer}>
        <TextInput placeholder="Material" style={styles.input} value={name} onChangeText={(name)=>{setName(name)}}/>
        <TextInput placeholder="Price"style={styles.input} keyboardType="numeric" value={price} onChangeText={(price)=>{setPrice(price)}}/>
        <TextInput placeholder="date" style={styles.input} keyboardType="date" value={date} onChangeText={(date)=>{setDate(date)}}/>
        <DropDownPicker value={location} onChangeText={(location)=>{setLocation(location)}}
         style={styles.drapdown}  items={[ {label: 'Herat', value: 'Herat',selected:'slected'},
        {label:'Kabu',value:'Kabul'},
        {label:'Bamyan', value:'Bamyan'}
         ]} />
        <Textarea value={detail} onChangeText={(detail)=>{setDetail(detail)}}
        containerStyle={styles.textareaContainer}
          style={styles.textarea}
          maxLength={130}
           placeholder={'Description . . .'}
         />
        
         <Button title="Pick an image from camera roll" onPress={pickImage}  value={image} onChangeText={(image)=>{setImage(image)}}/>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <TouchableOpacity style={[styles.btn,{backgroundColor:'blue'}]} >
            <Text style={styles.btnTxt} onPress={()=>addMaterialFun(name,price,date,location,detail,image)}>Save</Text>
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