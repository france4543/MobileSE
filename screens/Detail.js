import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView, Text ,View } from "react-native";
import axios from 'axios'
import { Card, Button , Icon } from 'react-native-elements'

export default Detail = ({navigation, route})  => {
    const [data,Setdata]= useState({})
     axios.get(`https://apimobileseup.herokuapp.com/Place/Travel/${route.params.id}`).then((res)=>{   
     Setdata(res.data)    
   })
   return (
<ScrollView style={styles.container}>
                <Card>
                      <View style={{flexDirection:"row"}}>
                        <Card.Title style={{marginRight:'auto'}}>{data.Place_name}</Card.Title>
                        <Icon name = 'plus-square' type = 'font-awesome' color = '#000000'/>
                      </View>
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
    fontSize:14,
  }

  });