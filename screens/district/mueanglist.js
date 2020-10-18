import React from "react";
import { View, StyleSheet,Image, Button, SafeAreaView,Text } from "react-native";

export default MueangList = ({navigation, route})  => {
  const namemeung = route.params.namemeung
  return (
    
    <SafeAreaView style={styles.container}>
        
          <Text> {namemeung } </Text>
      
      
    </SafeAreaView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
  });
  