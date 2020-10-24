import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,TouchableOpacity, Text,Button, View,SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectDistrictScreen from "./screens/selectdistrict";
import HomeScreen from './screens/home';
import MueangList from './screens/mueanglist';
import Detail from './screens/Detail';

const Stack = createStackNavigator();



const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
  initialRouteName="HomeScreen"
  screenOptions ={
    {
      headerStyle:{
        backgroundColor:'white',
        shadowOpacity: 0
      },
      headerTintColor:'black'
    }
  
  }
  >
      <Stack.Screen
        name="พะเยาเฮาม่วน"
        component={HomeScreen}
        options={
          {
           title:null
          }
}
        />
      
      <Stack.Screen
        name="SelectDistrict"
        component={SelectDistrictScreen}
      />

      
      <Stack.Screen
        name= "District"
        component={MueangList}
        options={
          {
            title:null
          }
}
      />
      <Stack.Screen
        name= "Detail"
        component={Detail}
        options={
          {
            title:null
          }
}
      />


      
    </Stack.Navigator>
  </NavigationContainer>
)



export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
