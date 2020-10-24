import Axios from "axios";
import React,{useEffect,useState} from "react";
import { View, StyleSheet,Text,Image, FlatList,ScrollView } from "react-native";
import axios from 'axios'

export default MueangList = ({navigation, route})  => {
 const [data,Setdata]= useState({})
  axios.get(`http://192.168.1.155:8000/Place/${route.params.Amphoe}`).then((res)=>{   Setdata(res.data)    })
  


  return (
    
    <ScrollView style={styles.container}>
        
        <FlatList
                 data={data}
                numColumns={1}
                horizontal={false}
                renderItem={({item}) => {
                    return( 
                    <Text>{item.Place_name}</Text>
                    )
                       
                    
                }}

            />

        
          
      
      
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  phusan:{
    width:100,
    height:200
  }

  });
  