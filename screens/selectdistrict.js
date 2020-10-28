import React, { useState } from "react";
import { ScrollView, StyleSheet,Image,TouchableOpacity,Text, FlatList } from "react-native";
import { Picker } from '@react-native-community/picker';
import axios from "axios"
import { Card, Button } from 'react-native-elements'

 
  const SelectDistrict = ({navigation}) => {

    const [data,Setdata]= useState({})
    axios.get(`https://apimobileseup.herokuapp.com/Place/1`).then((res)=>{   
    Setdata(res.data)    
    })

    const [selectedValue, setSelectedValue] = useState("");
    const setandgopage = (value) => {
        setSelectedValue(value)
        navigation.navigate("District",{ "Amphoe":value })


  }
  return (

    <ScrollView contentContainerStyle={{  justifyContent:'center', alignItems:'center'  }} style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 160 }}
        onValueChange={(itemValue, itemIndex) => { 
          setandgopage(itemValue)
            
          }
        }
      >
      
        <Picker.Item enabled={false} label="เลือกอำเภอ" value="selectam" />
        <Picker.Item label="เมืองพะเยา" value="1" />
        <Picker.Item label="ดอกคำใต้" value="6" />
        <Picker.Item label="ภูกามยาว" value="9" />
        <Picker.Item label="แม่ใจ" value="8" />
        <Picker.Item label="จุน" value="5" />
        <Picker.Item label="เชียงคำ" value="3" />
        <Picker.Item label="ปง" value="2" />
        <Picker.Item label="ภูซาง" value="7" />
        <Picker.Item label="เชียงม่วน" value="4" />
      </Picker>

      <FlatList
                data={data}
                numColumns={1}
                horizontal={false}
                renderItem={({item}) => {
                    return( 
                      <Card >
                      <Card.Divider/>
                      <Card.Image source={{uri:item.PathImage}} style={styles.ImagePlace} onPress={() =>
            		            navigation.navigate(
                                'Detail',
                                { id:item.id }
                                )
                            }/>
                          <Text style={styles.TextSelectHome}>{item.Place_name}</Text>
                          <Text style={styles.TextSelectAmphoe}>อำเภอ :{item.Amphoe_data.Amphoe_name}</Text>
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
    paddingTop: 40,
    

  },
  kwanphayao:{
      marginTop:20,
      width: 300,
      height:200
  },
  phusangwtf:{
    marginTop:20,
    width: 300,
    height:200
  },
  phulangka:{
    marginTop:20,
    width: 300,
    height:200
  },
  ImagePlace:{
    minWidth:'100%' ,
    height:300
  },
  TextSelectHome:{
    marginTop:10,
    fontWeight:'bold',
    fontSize : 15
  },
  TextSelectAmphoe :{

  }

});

export default SelectDistrict;