
import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView } from "react-native";
import axios from 'axios'
import { Card, Button } from 'react-native-elements'


export default MueangList = ({navigation, route})  => {
 const [data,Setdata]= useState({})
  axios.get(`http://192.168.1.155:8000/Place/${route.params.Amphoe}`).then((res)=>{   
  Setdata(res.data)    
})
  

  return (
    
    <ScrollView style={styles.container}>
        
        <FlatList
                 data={data}
                numColumns={1}
                horizontal={false}
                renderItem={({item}) => {
                    return( 
                      <Card>
                      <Card.Title>{item.Place_name}</Card.Title>
                      <Card.Divider/>
                      <Card.Image source={{uri:item.PathImage}} style={styles.ImagePlace} />
                      <Button  onPress={() =>
            		            navigation.navigate(
                                'Detail',
                                { id:item.id }
                                )
                            }
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,marginTop:20}}
                        title='ดูรายละเอียดสถานที่' />
                    </Card>
              
                    
                    
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
  ImagePlace:{
    width:300,
    height:300
  }

  });
  