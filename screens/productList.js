import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import { Feather } from "@expo/vector-icons";
// const db = SQLite.openDatabase('productRate.db')
import Item from "../components/item";
const products=[
  {id:'1',name:'Wheat', price:'300',MOQ:'20' ,img:require('../assets/f.jpg'),date:'2019',location:'Herat',detail:'some info'},
  {id:'2',name:'Oil', price:'300',MOQ:'1' ,img:require('../assets/d.jpg'),date:'2020',location:'Herat',detail:'some info'},
  {id:'3',name:'Rice', price:'300',MOQ:'20' ,img:require('../assets/f.jpg'),date:'2018',location:'Herat',detail:'some info'},
  {id:'4',name:'Gas', price:'300',MOQ:'20' ,img:require('../assets/d.jpg'),date:'2019',location:'Herat',detail:'some info'}
]
export default function ProductList({navigation}){     
   return(
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
   )
}
const styles =StyleSheet.create({
    
   
})