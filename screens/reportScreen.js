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
import ReportItem from "../components/reportItem";
// const db = SQLite.openDatabase('productRate.db')
const reports = [
    {id:'1',location:"Darb-khosh",Name:"Wajiha",shopNumber:"9",message:"something....something....something....something....something....something....something....something....something....something....something...."},
    {id:'2',location:"Darb-khosh",Name:"Wajiha",shopNumber:"09",message:"something....something....something....something....something....something....something....something....something....something....something....something...."},
    {id:'3',location:"Darb-khosh",Name:"Wajiha",shopNumber:"9",message:"something....something....something....something....something....something....something....something....something....something....something....something...."},
    {id:'3',location:"Darb-khosh",Name:"Wajiha",shopNumber:"9",message:"something....something....something....something....something....something....something....something....something....something....something....something...."}
]
export default function ReportScreen({navigation}){
    return (
      <FlatList 
        data={reports} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return <ReportItem
              location={item.location}
              message={item.message}
              shopNumber={item.shopNumber}
              name={item.Name}
          />
        }}
      />
    )
}