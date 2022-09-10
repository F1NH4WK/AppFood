import { View, Image,Text, Animated, Pressable } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useEffect, useRef } from "react";

import styles from "./styles";

export default function DetailsDishes({navigation, route}){

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            delay: 400,
            duration: 500,
            useNativeDriver: true
        }).start()
    }, [])

    const images = route.params

    return(
        <View style = {styles.container}>

            <View style = {styles.header}>
                <Feather name="arrow-left" size={28} color="white" onPress={() => navigation.goBack()} />
                <View style = {{height: '100%', justifyContent: 'space-evenly'}}>
                    <Text style = {styles.foodCategory}>Oriental Food</Text>
                    <Text style = {styles.foodName}>Nome Comida</Text>
                </View>
            </View>

            <View style = {styles.image}>
                <Image source={{uri: images[0].image}} style = {styles.image}/>
            </View>

            <View>
                <Text>A</Text>
            </View>
        </View>
    )
}