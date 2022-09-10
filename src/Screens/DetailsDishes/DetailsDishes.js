import { View, Image, StyleSheet, Text, Animated } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SharedElement } from "react-navigation-shared-element";
import { useEffect, useRef } from "react";

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
        <View style = {{flex: 1, alignItems: 'center', paddingTop: 30, paddingHorizontal: 20}}>
            <SharedElement id={images[0].id}>
                <View>
                    <Image 
                    source = {{uri: 'https://foodish-api.herokuapp.com/images/pizza/pizza12.jpg'}}
                    style = {styles.imageFront}/>
                </View>
            </SharedElement>

            
            <Animated.View style = {{...styles.firstInfos, opacity: opacity}}>
                <View style = {{flexDirection: 'column', justifyContent: 'space-evenly'}}>
                    <Text style = {{fontWeight: 'bold', fontSize: 25}}>Pizza</Text>
                    <Text style = {{fontSize: 18}}>Pizza</Text>
                    <Text>Alguma informação ae</Text>
                </View>

                <View>
                    <View style = {styles.starsView}>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style = {{fontWeight: 'bold'}}>4,0</Text>
                            <MaterialCommunityIcons name="star" size={15} color="white" />
                        </View>
                        <Text>GOOD</Text>
                    </View>

                    <View style = {{...styles.starsView, backgroundColor: 'black', height: '43%'}}>
                        <Text style = {{fontWeight: 'bold'}}>79</Text>
                        <Text>PHOTOS</Text>
                    </View>
                </View>
            </Animated.View>
        </View>


    )
}

const styles = StyleSheet.create({

    imageFront:{
        width: 250,
        height: 250,
        borderRadius: 300,
        marginBottom: 10
    },

    firstInfos:{
        width: '100%',
        height: '15%',
        // borderColor: 'red',
        // borderWidth: 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    starsView: {
        width: 80,
        height: '45%',
        backgroundColor: '#ED2C47',
        borderRadius: 8,
        justifyContent: 'center',
        padding: 8,
        margin: 5
    }
})