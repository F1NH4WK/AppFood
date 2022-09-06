import { StyleSheet, Text, View, Button, Image, FlatList, Pressable } from 'react-native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { NavigationContainer } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';


export default function App() {

  const values = [
    {
    id: '0',
    image: 'https://picsum.photos/200/300?random=2',
    title: 'Teste0'
    },
    {
    id: '1', 
    image: 'https://picsum.photos/200/300?random=1',
    title: 'Teste1' 
    }
  ]

  function Vizualizer({navigation, route}){
    return(
      <View style = {{flex: 1, flexDirection: 'row'}} key = {route.id}>
        <Pressable onPress={() => navigation.push('TesteExemplo', {route})}>
          <SharedElement id = {route.id} nativeID={`${route.id}`}>
            <Image source={{uri: route.image}}  
            style = {{width:100, height: 100, margin: 10}}
            />
          </SharedElement>
        </Pressable>
      </View>
    )
  } 

  function Teste({navigation}){
    return(
      <View>
        <FlatList
          data={values}
          keyExtractor = {(item) => item.id}
          renderItem = {({item}) => <Vizualizer navigation={navigation} route = {item}/>}
          horizontal
          />
      </View>
    )
  }

  function TesteExemplo({navigation, route}){
    
    const  item  = route.params.route

    return(
      <View style = {styles.container} key = {item.id}>
        <SharedElement id = {item.id} nativeID={`${item.id}`}>
          <Image source={{uri: item.image}} style = {{width: 250, height: 250}}/>
        </SharedElement>
        <Text>{item.title}</Text>
      </View>
    )
  }

  const Stack = createSharedElementStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Teste' screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Teste" component={Teste} />
        <Stack.Screen name = "TesteExemplo" component={TesteExemplo}
        sharedElements = {({params}) => [params.route.id]
      }
        />
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
});
