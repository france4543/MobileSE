import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView, Text ,View,Alert} from "react-native";
import axios from 'axios'
import { Card, Button , Icon } from 'react-native-elements'

export default Detail = ({navigation, route})  => { 
  const [data,Setdata]= useState({})

  
  useEffect(() => {
    axios.get(`http://192.168.43.38:8000/Place/Travel/${route.params.id}`).then((res)=>{   
     Setdata(res.data)    
   })

  }, [])

   
    

   


   const addtrip = ()=>
    {
      const datatrip = {
        "Place_name": data.Place_name,
        "Place_content": data.Place_content,
        "PathImage": data.PathImage,
        "Amphoe": data.Amphoe
      }
      console.log(datatrip);
      axios.post(`http://192.168.43.38:8000/Trip`,datatrip)
        .then((res)=>{ 
          Alert.alert('เพิ่มแล้ว')
      })
      .catch((err)=> console.log(err))
   }
      
   return (
    <ScrollView style={styles.container}>
                <Card>
                      <View style={{flexDirection:"row"}}>
                        <Card.Title style={{marginRight:'auto'}}>{data.Place_name}</Card.Title>
                        
                          <Icon name = 'plus-square' type = 'font-awesome' color = '#000000'
                          onPress={addtrip}/>
                        
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
    backgroundColor: '#AEB0E0',

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