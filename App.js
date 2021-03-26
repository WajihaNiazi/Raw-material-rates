import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from 'expo-sqlite'; //fro db
// import SideMenu from "react-native-side-nav"
const db=SQLite.openDatabase('raw_material_rates.db');//for db

const Stack = createStackNavigator();


import AddReport from "./screens/addreportScreen";
import Reports from "./screens/reportScreen";
import Navlink from "./screens/navlink";
import ProductScreen from "./screens/productList";
import ProductDetail from "./screens/productDetail";
import ProductList from "./screens/productList";
import AddMaterial from './screens/addMaterial'


export default function App() {
  useEffect(()=>{//for db
    db.transaction(para=>{
      // para.executeSql("PRAGMA foreign_key=on"); 
      para.executeSql(
        'create table if not exists material(id integer primary key autoincrement,name text, price text,date text,location text,detail text,image text);'
        ,[],()=>console.log('table created!')
      );
      para.executeSql(
        'create table if not exists reportTable(id integer primary key autoincrement,reportname text,reportlocation text,shopNumber text,message text,material_id INTEGER REFERENCES material(id));'
        ,[],()=>console.log('table tttt created!')
      );
      
    })
  })
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List Of Materials" component={ProductList}
              options={({navigation})=>({
                headerRight:()=>(
                <TouchableOpacity style={{paddingRight:20}}
                onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#400080"/>
                  </Text>
                </TouchableOpacity>
              )
              })} 
          />
          <Stack.Screen name="Navlink" component={Navlink} />
          <Stack.Screen name="Report" component={Reports}
              options={({navigation})=>({
                headerRight:()=>(
                <TouchableOpacity style={{paddingRight:20}}
                onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#400080"/>
                  </Text>
                </TouchableOpacity>
              )
              })} 
          />
          <Stack.Screen name="ProductScreen" component={ProductScreen}  
            options={({navigation})=>({
              headerRight:()=>(
                <TouchableOpacity style={{paddingRight:20}}
                 onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#400080"/>
                  </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Add Material" component={AddMaterial} 
              options={({navigation})=>({
                headerRight:()=>(
                  <TouchableOpacity style={{paddingRight:20}}
                  onPress={()=> navigation.navigate('Navlink')}>
                    <Text>
                      <MaterialIcons name="menu" size={24} color="#400080"/>
                    </Text>
                  </TouchableOpacity>
                )
              })}
          />
          <Stack.Screen name="AddReport" component={AddReport} 
            options={({navigation})=>({
              headerRight:()=>(
                <TouchableOpacity style={{paddingRight:20}}
                 onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#400080"/>
                  </Text>
                </TouchableOpacity>
              )
            })}
          />
          <Stack.Screen name="Material Info" component={ProductDetail} 
            options={({navigation})=>({
              headerRight:()=>(
                <TouchableOpacity style={{paddingRight:20}}
                 onPress={()=> navigation.navigate('Navlink')}>
                  <Text>
                    <MaterialIcons name="menu" size={24} color="#400080"/>
                  </Text>
                </TouchableOpacity>
              )
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
