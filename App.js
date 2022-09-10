import { StyleSheet, Text, View, Image } from 'react-native';
import { createSharedElementStackNavigator, SharedElement } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

import Home from './screens/Home';
import DetailsDishes from './screens/DetailsDishes';

export default function App() {


  const Stack = createSharedElementStackNavigator();

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
            <View style = {{flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between'}}>
              <Ionicons name="ios-search-outline" size={25} color="white" style = {{marginRight: 15}}/>
              <Ionicons name="ios-cart-outline" size={25} color="white"  />
              {/* Needs to add badges for ios-cart-outline */}
            </View>
          ),
          headerTitle: '', 
        }} />

        <Stack.Screen name='DetailsDishes' component={DetailsDishes} 
        options = {{headerShown: false}}
        sharedElements = {({params}) => {
        const image = params[0]
        return [{id: image.id,
        animation: 'fade-out',
        resize: 'none',
        }]}} />
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
  }
})