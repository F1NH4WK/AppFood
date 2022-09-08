import { StyleSheet, Text, View, Button, Image, FlatList, Pressable, Dimensions, ScrollView } from 'react-native';
import { createSharedElementStackNavigator, SharedElement } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import DropDownPicker from 'react-native-dropdown-picker';
import { useEffect, useState } from 'react';

import Home from './screens/Home';

export default function App() {


  const Stack = createSharedElementStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false}}>
        <Stack.Screen name = "Home" component={Home} options = {{
          headerLeft: () => (
          <View style = {styles.headerStyle}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} 
            style = {{width: 30, height: 30, borderRadius: 40, marginHorizontal: 10}}/>
            <Text style = {{fontSize: 16, fontWeight: '600'}}>Hi, Eduardo!</Text>
          </View>
          ),
          headerRight: () => (
            <View style = {{flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between'}}>
              <Ionicons name="ios-search-outline" size={25} color="white" style = {{marginRight: 15}}/>
              <Ionicons name="ios-cart-outline" size={25} color="white"  />
              {/* Needs to add badges for ios-cart-outline */}
            </View>
          ),
          headerTitle: '',
          
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
  headerStyle: {
    // borderColor: 'red',
    // borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  intro: {
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
    padding: 20,
    justifyContent: 'center',
  },

  delivery:{
    padding: 20,
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2
  },
  promotions: {
    marginRight: 10,
  },
  servicesRow: {
    borderColor: '#ED2C47',
    borderWidth: 1,
    width: '25%',
    marginBottom: 20
    },

  allServices: {
    height: 90,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25

  },

  iconInsideService: {
    // borderColor: 'blue',
    // borderWidth: 2,
    paddingBottom: 4,
    paddingHorizontal: 5,
    borderRadius: 60,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 5
  },

  services: {
    marginRight: 25,
    height: 90,
    width: 60,
    // borderColor: 'red',
    // borderWidth: 2,
    borderRadius: 60,
    alignItems: 'center',
    padding: 3,
    backgroundColor: '#ED2C47',
  },

  popularContainer: {
    // borderColor: 'red',
    // borderWidth: 2,
    width: '45%',
    height: 200,
    alignItems: 'center',
    paddingTop: 35
  },

  popularEffect: {
    // borderColor: 'green', 
    // borderWidth: 2, 
    borderRadius: 15,
    width: '100%', 
    height: '100%',
    paddingTop: 80,
    backgroundColor: '#ED2C47',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  popularViewImage: {
    // borderColor: 'blue', 
    // borderWidth: 2, 
    width: 100, 
    height: 100,
    position: 'absolute',
    zIndex: 2
  },

  popularViewInfo: {
    width: '100%',
    // borderColor: 'blue',
    // borderWidth: 2,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  }
  

});
