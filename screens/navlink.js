import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Colors from '../utils/colors';

export default function Navlink({navigation}){
    return (
      <View style={styles.contianer}>
          <View>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('Add Material')}>
                <Text style={styles.text}>
                     Add Material
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('List_Of_Materials')}>
                <Text style={styles.text}>
                    List of Materials
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.TouchableOpacitystyle,{paddingRight:20}]}
                onPress={()=> navigation.navigate('Report')}>
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