import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView, Text } from "react-native";
import axios from 'axios'
import { Card, Button } from 'react-native-elements'

export default Detail = ({navigation, route})  => {
    const [data,Setdata]= useState({})
     axios.get(`https://apimobileseup.herokuapp.com/Place/Travel/${route.params.id}`).then((res)=>{   
     Setdata(res.data)    
   })
   return (
<ScrollView style={styles.container}>
                <Card>
                      <Card.Title>{data.Place_name}</Card.Title>
                      <Card.Divider/>
                      <Card.Image source={{uri:data.PathImage}} style={styles.ImagePlace} />
                        <Text style={styles.Textcontent}>{data.Place_content}</Text>
                    </Card>
    </ScrollView>
    
   );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  ImagePlace:{
    minWidth:'100%',
    height:300
  },
  Textcontent:{
    marginTop:10,
    fontSize:13,
    textAlign: 'center'
    
  }

  });