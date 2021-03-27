import React,{useState,useEffect} from 'react';
import {
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import Item from "../components/item";
import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material_rate.db');//for db

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
   return(
    <View>
        <FlatList data={products} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
        return <Item 
            name={item.name} 
            price={item.price}
            unit={item.unit} 
            date={item.date} 
            img={item.img} 
            onPress={()=>{navigation.navigate('Material Info',{item:item})}}
            />
        }}/>
     </View>
   )
}
const styles =StyleSheet.create({
    
   
})