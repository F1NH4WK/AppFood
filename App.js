import { StyleSheet, Text, View, Button, Image, FlatList, Pressable } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';
import { Ionicons } from '@expo/vector-icons'; 


export default function App() {

  function Teste({navigation}){
    return(
      <View>

      </View>
    )
  }

  const headerOptions = {
    
  }

  const Stack = createSharedElementStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Teste' screenOptions={{
        headerShown: true}}>
        <Stack.Screen name = "Teste" component={Teste} options = {{
          headerLeft: () => (
          <View style = {styles.headerStyle}>
            <Image source={{uri: 'https://picsum.photos/200/300'}} 
            style = {{width: 30, height: 30, borderRadius: 40, marginRight: 10}}/>
            <Text style = {{fontSize: 16, fontWeight: '600'}}>Hi, Eduardo!</Text>
          </View>
          ),
          headerRight: () => (
            <View style = {{flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between'}}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerStyle: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  }
});
