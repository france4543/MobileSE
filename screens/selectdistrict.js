import React, { useState } from "react";
import { ScrollView, StyleSheet,Image,TouchableOpacity,Text } from "react-native";
import { Picker } from '@react-native-community/picker';



const SelectDistrict = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState("");


  const setandgopage = (value) => {
      setSelectedValue(value)
      navigation.navigate("MueangList",{ "namemeung":value })
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
        <Picker.Item label="เมืองพะเยา" value="mueang" />
        <Picker.Item label="ดอกคำใต้" value="dokkhamtai" />
        <Picker.Item label="ภูกามยาว" value="phukamyao" />
        <Picker.Item label="แม่ใจ" value="maechai" />
        <Picker.Item label="จุน" value="chun" />
        <Picker.Item label="เชียงคำ" value="ChiangKham" />
        <Picker.Item label="ปง" value="pong" />
        <Picker.Item label="ภูซาง" value="phusang" />
        <Picker.Item label="เชียงม่วน" value="chiangmuan" />
      </Picker>

      
      <TouchableOpacity>
      <Image
        style={styles.kwanphayao}
        source={{
          uri: 'http://nfemp.com/userfiles/images/fixedw_large_4x.jpg',
          
        }}
      />
      </TouchableOpacity>


      <TouchableOpacity>
      <Image
        style={styles.phusangwtf}
        source={{
          uri: 'https://thailandtourismdirectory.go.th/th/file/get/file/20180623496ff8fb3a8a11487bf76c881a857ddf142252.jpg',
        }}
      />
      </TouchableOpacity>

      <TouchableOpacity>
      <Image
        style={styles.phulangka}
        source={{
          uri: 'https://www.thainorthtour.com/img/upload/city-56bd3ecdeeda2.jpg',
        }}
      />
      </TouchableOpacity>


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
  }

});

export default SelectDistrict;