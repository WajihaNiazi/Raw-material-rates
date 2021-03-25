import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
// import Colors from '../utils/colors';
// import { Feather } from "@expo/vector-icons";
import Item from "../components/item";
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material_rates.db');//for db
// const products=[
//   {id:'1',name:'Wheat', price:'300',MOQ:'20' ,img:require('../assets/f.jpg'),date:'2019',location:'Herat',detail:'some info'},
//   {id:'2',name:'Oil', price:'300',MOQ:'1' ,img:require('../assets/d.jpg'),date:'2020',location:'Herat',detail:'some info'},
//   {id:'3',name:'Rice', price:'300',MOQ:'20' ,img:require('../assets/f.jpg'),date:'2018',location:'Herat',detail:'some info'},
//   {id:'4',name:'Gas', price:'300',MOQ:'20' ,img:require('../assets/d.jpg'),date:'2019',location:'Herat',detail:'some info'}
// ]
export default function ProductList({navigation}){  
  const [products,setProducts]=useState([]); //for db
  useEffect(()=>{
      db.transaction(tx=>{
          tx.executeSql('select * from material' ,[],(tx,{rows})=>{
              var data=[];
              for(var i=0; i<rows.length; i++){
                  data.push(rows[i]);
              }
              setProducts(data);
          })
      })
  })
  const deleteContact=(id)=>{
      db.transaction(tx=>{
          tx.executeSql('delete from material where id=?',[id]);
      })
  }   
   return(
   


    <View>
  
    <FlatList data={products} 
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>{
       return <Item 
         name={item.name} 
         price={item.price}
         MOQ={item.MOQ} 
         date={item.date} 
         img={item.img} 
         onPress={()=>{navigation.navigate('Material Info',{item:item})}}
         onpressReport={()=>{navigation.navigate('AddReport',{item:item})}}
         />
     }}/>
    
     </View>
   )
}
const styles =StyleSheet.create({
    
   
})