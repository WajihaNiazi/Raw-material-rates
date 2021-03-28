import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import * as SQLite from 'expo-sqlite'; //fro db
const db=SQLite.openDatabase('raw_material.db');//for db



import AddReport from "./screens/addreportScreen";
import Reports from "./screens/reportScreen";
import Navlink from "./screens/navlink";
import ProductDetail from "./screens/productDetail";
import ProductList from "./screens/productList";
import AddMaterial from './screens/addMaterial'


export default function App() {
  useEffect(()=>{//for db
    db.transaction(para=>{
      // para.executeSql("PRAGMA foreign_key=on"); 

      para.executeSql('create table if not exists material(id integer primary key autoincrement,name text, price text,date text,unit text,location text,detail text);',[],()=>console.log('table created!'));

      para.executeSql(
        'create table if not exists tableReport(report_id integer primary key autoincrement,reportname text,reportlocation text,shopNumber text,message text,material_id INTEGER REFERENCES material(id));'
        ,[],()=>console.log('table tttt created!')
      );
      
    })
  })
  return (
    <View style={styles.container}>

      <NavigationContainer >
        <Stack.Navigator style={{backgroundColor:"#127bb8"}}>

          <Stack.Screen name="List_Of_Materials" component={ProductList}
              options={({navigation})=>({
                title:'List of Materials',
                headerLeft:()=>(
                <TouchableOpacity style={{paddingRight:20,marginLeft:20}}
                onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#fff"/>
                  </Text>
                </TouchableOpacity>
              ),
              headerStyle:{backgroundColor:'#127bb8'},
              headerTintColor:'white',
              })} 
          />
          <Stack.Screen name="Navlink" component={Navlink} 
          options={({navigation})=>({
            headerStyle:{backgroundColor:'#127bb8'},
            headerTintColor:'white',
          })}/>
          <Stack.Screen name="Report" component={Reports}
              options={({navigation})=>({
                headerLeft:()=>(
                <TouchableOpacity style={{paddingRight:20,marginLeft:20}}
                onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#fff"/>
                  </Text>
                </TouchableOpacity>
              ),
              headerStyle:{backgroundColor:'#127bb8'},
              headerTintColor:'white',
              })} 
          />
        
          <Stack.Screen name="Add Material" component={AddMaterial} 
            options={({navigation})=>({
              headerStyle:{backgroundColor:'#127bb8'},
              headerTintColor:'white',
            })}
          />
          <Stack.Screen name="AddReport" component={AddReport}
            options={({navigation})=>({
              headerStyle:{backgroundColor:'#127bb8'},
              headerTintColor:'white',
            })} 
          />
          <Stack.Screen name="Material Info" component={ProductDetail} 
            options={({navigation})=>({
              headerStyle:{backgroundColor:'#127bb8'},
              headerTintColor:'white',
            })}

          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2'
  },
});