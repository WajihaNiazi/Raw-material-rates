import React,{useState,useEffect} from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';

import Item from "../components/item";
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material_rates.db');//for db
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