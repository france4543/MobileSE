import React, { useState } from "react";
import { View, StyleSheet,Image, Button, SafeAreaView,ImageBackground } from "react-native";

const image = { uri: "http://nfemp.com/userfiles/images/fixedw_large_4x.jpg" };
export default HomeScreen = ({navigation})  => {
    return (
      
      <SafeAreaView style={styles.container}>
          <ImageBackground  source={image} style={styles.image}>
            <Button title="ยินดีต้อนรับ" style={{ flex:1}} onPress={ () => navigation.navigate("SelectDistrict") }/>
        </ImageBackground>
        
      </SafeAreaView>
      
    );
  }
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',

    },
    image: {
        flex: 1,
        justifyContent:"center",
        alignItems:"center",
        resizeMode:"cover",
        
        
        
        
  }
  });
  
