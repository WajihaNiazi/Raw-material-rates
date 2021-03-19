import { StatusBar } from 'expo-status-bar';
import React,{useEffect} from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as SQLite from "expo-sqlite";
const Stack = createStackNavigator();
// const db = SQLite.openDatabase('productRate.db')
import AddReport from "./screens/addreportScreen";
import Report from "./screens/reportScreen";
import AddProductScreen from "./screens/addproductScreen";
import ProductScreen from "./screens/productScreen";
import ProductDetial from "./screens/productDetail";
import Navlink from "./screens/navlink";
export default function App() {
  // useEffect(()=>{
  //    db.transaction(tx=>{
  //      tx.executeSql('create table contact(id integer primary key autoincrement, name text ,phone text,email text)')
  //    },[],()=>console.log('table created successfully')); 
  // })
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
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
          <Stack.Screen name="ProductDetial" component={ProductDetial}
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
          <Stack.Screen name="AddProductScreen" component={AddProductScreen}
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
          <Stack.Screen name="Report" component={Report}
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
          <Stack.Screen name="Navlink" component={Navlink} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f8f4f4"
  },
});
