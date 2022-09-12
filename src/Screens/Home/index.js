import { Text, View, Image, FlatList, Pressable, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons'; 
import { useEffect, useState } from 'react';
import { Snackbar } from 'react-native-paper';

import styles from './styles';

export default function Home({navigation}){        
        
  // SNACK BAR CONFS
  const [snackVisible, setSnackVisible] = useState(false);
  const onToggleSnack = () => setSnackVisible(true)
  const onDismissSnack = () => setSnackVisible(false)

  
  const [dishesImages, setDishesImages] = useState([
        {id: '0', image: 'https://foodish-api.herokuapp.com/images/pizza/pizza12.jpg'}
    ])
        
          // useEffect(() => {
          //   fetch('https://foodish-api.herokuapp.com/api/')
          //   .then((response) => response.json())
          //   .then((json) => setDishesImages([...dishesImages, {id: dishesImages.length, image: json.image}]))
          // }, [])
        
        
        const servicesData = [
            { id: 0, title: 'All'},
            { id: 1, title: 'Pizza',     image: 'https://cdn-icons-png.flaticon.com/512/3595/3595455.png',},
            { id: 2, title: 'Chinese',   image: 'https://cdn-icons-png.flaticon.com/512/2718/2718224.png'},
            { id: 3, title: 'Desserts',  image: 'https://cdn-icons-png.flaticon.com/512/2137/2137036.png'},
            { id: 4, title: 'Salads',    image: 'https://cdn-icons-png.flaticon.com/512/2515/2515263.png'},
            { id: 5, title: 'Burgers',   image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png'},
            { id: 6, title: 'Chickens',  image: 'https://cdn-icons-png.flaticon.com/512/737/737956.png'}]
        
          const data = [
            {id: 0, image: 'https://i.pinimg.com/originals/3b/7c/93/3b7c9391b0dba6a892abd4c244e4f8c6.jpg'},
            {id: 1, image: 'https://www.teahub.io/photos/full/254-2540874_mcdonald-s-japan-french-fries.jpg'},
            {id: 2, image: 'https://images.squarespace-cdn.com/content/v1/592685ab29687fab3ebeff92/1533368741587-8MBGTUYJXG3MNF8LL7RJ/promotion_banner_alldaybreakfast-phase2-v001.jpg'},
            {id: 3, image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0fdd0e25559501.56347a238b44b.png'},
            {id: 4, image: 'https://i.pinimg.com/originals/d4/e5/c8/d4e5c8a7fd70dc54bc2fcf134fb5dbad.jpg'},
            {id: 5, image: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/healthy-eating-banner-design-template-e62a9b4aff1f581bc483e75cea635d40_screen.jpg?ts=1628958665'},
            {id: 6, image: 'https://s3.envato.com/files/246755655/1200x627.jpg'}
          ]
        
        function ViewPromotions({item}){
            return(
              <View style = {styles.promotions}>
                <Image 
                  source={{uri: item.image}}
                  resizeMode = {'stretch'}
                  style = {{width: 200, height: 100, borderRadius: 10}}/>
              </View>
            )
          }
        
        function ViewServices({item}){
        
            if ( item.id > 0){
              return(
                <View style = {styles.services}>
                  <View style = {styles.iconInsideService}>
                    <Image style = {{width: 24, height: 24}} source = {{uri: item.image}} />
                  </View>
                  <Text style ={{fontSize: 12, fontWeight: 'bold'}}>{item.title}</Text>
                </View>
              )
            }
            else{
              <View style = {styles.allServices}>
                <Text>All</Text>
              </View>
            }
          }

    function ViewPopular({item}){
            return(
                
            <View style = {styles.popularContainer}>
              <Pressable style = {styles.popularViewImage} onPress = {() => navigation.push('DetailsDishes', dishesImages)}>
                    <Image source={{uri: item.image}} 
                    style = {{width: 100, height: 100, borderRadius: 300, zIndex: 2}}/>
              </Pressable>

              <View style = {styles.popularEffect}>
                <Text style = {{fontSize: 15, fontWeight: 'bold'}}>Pizza</Text>
                <Text style = {{fontSize: 11, opacity: 0.7}}>Description</Text>

                <View style = {styles.popularViewInfo}>
                  <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <MaterialIcons name="attach-money" size={20} color="white" />
                    <Text  style = {{fontWeight: 'bold'}}>{Math.round(Math.random() * 10)}</Text>
                </View>
                    <AntDesign     name="plussquare"   size={28}  color="white"
                    onPress={onToggleSnack} />
                </View>
              </View>
          </View>
        )
            }


            return(
              <View style = {{backgroundColor: '#fff', flex: 1}}>
                <ScrollView>
        
                  <View style = {styles.intro}>
                    <Text 
                    style = {{fontSize: 25, fontWeight: 'bold', color: '#ED2C47'}}>
                      Best Food</Text>
                    <Text 
                    style = {{fontSize: 20}}>
                      For you today</Text>
                  </View>
        
                  <View style = {styles.delivery}>
                    <Text 
                    style = {{fontSize: 15, fontWeight: '600', color: '#ED2C47'}}>
                      DELIVERY TO</Text>
                      
                    <View style = {{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                      <Text  style = {{fontSize: 15, fontWeight: 'bold'}}>
                        Rua União, 452, SP</Text>
                      <Ionicons name="caret-down" size={15} color="white" />
                    </View>
                  </View>
        
                  <View style = {{width: '100%', marginBottom: 40, paddingLeft: 20}}>
                      <FlatList 
                      horizontal
                      data={data}
                      keyExtractor = {({id}) => id}
                      renderItem = {({item}) => <ViewPromotions item={item}/>}
                      showsHorizontalScrollIndicator = {false}
                      snapToInterval = {200}
                      decelerationRate = {'fast'}/>
                  </View>
        
                  <View style = {{width: '100%', paddingLeft: 20}}>
                    <Text style = {{fontSize: 18, marginBottom: 2, fontWeight: '500'}}>Services</Text>
                    <View style = {styles.servicesRow}/>
                    
                    <View style = {{flexDirection: 'row', marginBottom: 40}}>
                
                      <FlatList
                        horizontal
                        data={servicesData}
                        keyExtractor = {({id}) => id}
                        renderItem={({item}) => <ViewServices item = {item}/> } 
                        showsHorizontalScrollIndicator = {false}
                        snapToInterval = {60}
                        decelerationRate = {'fast'}
                        />
                      </View>
                  </View>
        
                  <View style = {{marginLeft: 20, width: '100%'}}>
                    <Text style = {{fontSize: 18, marginBottom: 2, fontWeight: '500'}}>Popular</Text>
                      <View style = {styles.servicesRow}/>

                      <FlatList
                      horizontal
                      showsHorizontalScrollIndicator = {false}
                      data = {dishesImages}
                      keyExtractor = {({id}) => id}
                      renderItem = {({item}) => <ViewPopular item={item} />}
                      snapToInterval = {150}
                      decelerationRate = {'fast'}
                      />
                    </View>
                </ScrollView>

                <Snackbar 
                visible = {snackVisible}
                onDismiss = {onDismissSnack}
                duration = {3000}
                action = {{label: 'Undo', onPress: () => {}}}>
                  Added to cart!
                </Snackbar>
              </View>
            )
          }
