import React,{useEffect,useState} from "react";
import {StyleSheet, FlatList,ScrollView, Text, View } from "react-native";
import axios from 'axios'
import { Card, Button } from 'react-native-elements'

export default Trip = ({navigation, route})  => {
    
   return (
<ScrollView style={styles.container}>
                <View>
                    <Text>Trip</Text>
                </View>
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