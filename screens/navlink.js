import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import Colors from '../utils/colors';
import * as SQLite from "expo-sqlite";
import { Feather } from "@expo/vector-icons";
// const db = SQLite.openDatabase('productRate.db')

export default function Navlink({navigation}){
    return (
      <View>
        <TouchableOpacity style={{paddingRight:20}}
            onPress={()=> navigation.navigate('AddProductScreen')}>
            <Text>
                AddProduct
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight:20}}
            onPress={()=> navigation.navigate('ProductScreen')}>
            <Text>
                Product
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight:20}}
            onPress={()=> navigation.navigate('Report')}>
            <Text>
                Report
            </Text>
        </TouchableOpacity>
      </View>
    )

}
const styles =StyleSheet.create({
})