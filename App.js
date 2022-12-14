import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

import Home from './src/Screens/Home/';
import DetailsDishes from './src/Screens/DetailsDishes/';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{headerStyle: {backgroundColor: '#fff'}, headerShadowVisible: false}}>
        <Stack.Screen name = "Home" component={Home} options = {{
          headerLeft: () => (
          <View style = {styles.headerStyle}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} 
            style = {{width: 30, height: 30, borderRadius: 40, marginHorizontal: 10}}/>
            <Text style = {{fontSize: 16, fontWeight: '600'}}>Hi, Eduardo!</Text>
          </View>
          ),
          headerRight: () => (
            <View style = {{flexDirection: 'row', marginHorizontal: 10, justifyContent: 'space-between'}}>
              <Ionicons name="ios-search-outline" size={25} color="white" style = {{marginRight: 15}}/>
              <Ionicons name="ios-cart-outline" size={25} color="white"  />
              {/* Needs to add badges for ios-cart-outline */}
            </View>
          ),
          headerTitle: '', 
        }} />

        <Stack.Screen name='DetailsDishes' component={DetailsDishes} 
        options = {{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  
  headerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})