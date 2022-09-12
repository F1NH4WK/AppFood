import 'react-native-reanimated';
import { View, Text  } from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { MotiView, MotiImage, MotiText, AnimatePresence } from "moti";
import { Ionicons } from '@expo/vector-icons'; 

import styles from "./styles";


export default function DetailsDishes({navigation, route}){

    const images = route.params

    return(
        <AnimatePresence>
        <MotiView 
        style = {styles.container}>
            
            <MotiView
            from = {{translateY: -100}}
            animate = {{translateY: 0}} 
            transition = {{
                duration: 600,
                type: 'timing'
            }}
            exit = {{translateY: -100}}
            style = {styles.header}>
                <Feather name="arrow-left" size={28} color="white" onPress={() => navigation.goBack()} />
                <View style = {{height: '100%', justifyContent: 'space-evenly'}}>
                    <Text style = {styles.foodCategory}>Food Category</Text>
                    <Text style = {styles.foodName}>Food Name</Text>
                </View>
            </MotiView>

            <View style = {styles.image}>
                <AnimatePresence>
                <MotiImage
                from = {{opacity: 1, translateX: 300}}
                animate = {{opacity: 1, translateX: 0}}
                transition = {{
                    duration: 600,
                    type: 'timing'
                }}
                exit = {{opacity: 0,}}

                source={{uri: images[0].image}} style = {styles.image}/>
                </AnimatePresence>
            </View>

            <MotiView 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 500}}
            style = {styles.footer}>
                <Text style = {{fontSize: 18, marginBottom: 10, fontWeight: 'bold'}}>Detail</Text>
                <Text style = {{opacity: 0.7}}>Get 50% discount on the special and delicious pizza and stay connected for further discounts.</Text>

                <View style = {styles.footerBuy}>
                    <Text style = {{fontSize: 28, fontWeight: 'bold'}}>$ 22</Text>
                    <View style = {styles.footerAddCart}>
                        <Text>Add to Cart</Text>
                        <Ionicons name="ios-cart-outline" size={30} color="white"  />
                    </View>
                </View>
            </MotiView>
        </MotiView>
        </AnimatePresence>
    )
}