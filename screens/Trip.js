import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView, Text, View,Alert,TouchableHighlight, ActivityIndicator, Image } from "react-native";
import axios from 'axios'
import { Card, Button,Icon } from 'react-native-elements'
import { Value } from "react-native-reanimated";




export default Trip = ({navigation, route})  => {
    
    

    const [data,setData]= useState({})
    const [isLoading,setLoading]=useState([])
    useEffect(() => {
        axios.get(`http://192.168.43.38:8000/Trip`)
        .then((res)=>
            {
                setData(res.data)
                setLoading(false)
            })
        .catch((err)=>console.log(err))
    }, [])

    if (isLoading){
        return(
            <View style={{flex:1,justifyContent:'center'}}>
               <ActivityIndicator />
            </View>
        )
    }

    const DeleteEiei = (Value) => {
        axios.delete(`http://192.168.43.38:8000/Trip/`+Value.id)
            .then((res)=>{
            })
            .catch((err)=>{})
    }

   return (
    <ScrollView style={styles.container}>
                <Card>
                    {data.map((Value)=>{
                        return(
                            <View>
                                <Card>
                                    <Image source={{uri:Value.PathImage}} style={styles.ImagePlace} />
                                    <Text style={styles.Textcontent}>{Value.Place_name}</Text>
                                    <TouchableHighlight>
                                        <Icon style={{flexDirection:'row',marginLeft:110,marginTop:10}}
                                        name = 'times-circle' type = 'font-awesome' color = '#000000' onPress={DeleteEiei(Value.id)}/>
                                    </TouchableHighlight>
                                </Card>
                            </View>
                                                   
                            )
                    })}
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
    textAlign:'center'
  },

  TextSelectHome:{
    marginTop:10,
    fontWeight:'bold',
    fontSize : 15
  },
  TextSelectAmphoe :{

  }

  });