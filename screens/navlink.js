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
      <View style={styles.contianer}>
          <View>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('AddProductScreen')}>
                <Text style={styles.text}>
                    AddProduct
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('ProductScreen')}>
                <Text style={styles.text}>
                    Product
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('Reports')}>
                <Text style={styles.text} >
                    Reports
                </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
}
const styles =StyleSheet.create({
    contianer:{
        backgroundColor:Colors.white,
        textAlign:'center',
        alignContent:'center',
        display:'flex',
        width:"100%",
	    height:"100%"
    },
    TouchableOpacitystyle:{
        padding:20,
        margin:2,
        borderWidth:2,
        borderColor:Colors.secondary
    },
    text:{
        fontWeight:'bold',
        fontSize:20
    }
})