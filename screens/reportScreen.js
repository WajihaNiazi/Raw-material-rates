import React,{useState,useEffect} from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';

import ReportItem from "../components/reportItem";

import * as SQLite from 'expo-sqlite'; //fro db

const db=SQLite.openDatabase('raw_material.db');//for db

export default function ReportScreen({navigation}){
 
  const [reports,setReports]=useState([]); //for db
  useEffect(()=>{
      db.transaction(tx=>{
          tx.executeSql('select * from tableReport,material where material_id = material.id' ,[],(tx,{rows})=>{
              var data=[];
              for(var i=0; i<rows.length; i++){
                  data.push(rows[i]);
              }
              setReports(data);
          })
      })
  })
  const deleteReport=(report_id)=>{
    db.transaction(tx=>{
        tx.executeSql('delete from tableReport where report_id=?',[report_id]);
      })
    } 

    return (
      <FlatList 
        data={reports} 
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
          return <ReportItem
              location={item.reportlocation}
              message={item.message}
              shopNumber={item.shopNumber}
              name={item.reportname}
              productname={item.name}
              onDeleteReport={()=>{deleteReport(item.report_id)}}
          />
        }}
      />
    )
}