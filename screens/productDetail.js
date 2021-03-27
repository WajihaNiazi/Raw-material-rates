import React,{useState,useEffect} from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import ProductDetials from '../components/productDetails';
// const image=require('../assets/f.jpg');
export default function ProductDetail(props){
  const {route} =props;
  const {item}=route.params;
  const {name, img, detail,location,price,date,unit,id}=item
    return (
      <View style={styles.container}>
         <ProductDetials 
            name={name} 
            img={img}
            id={id} 
            detail={detail} 
            location={location} 
            price={price} 
            date={date} 
            unit={unit} />
      </View>
    )
}
const styles =StyleSheet.create({
    container:{
      backgroundColor:'#f2f2f2',
      width:"100%",
	    height:"100%"
    }  
})