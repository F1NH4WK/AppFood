import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40,
        paddingHorizontal: 20,
    },

    header: {
        flexDirection: 'row',
        width: '100%',
        height: 80,
        // borderColor: 'red',
        // borderWidth: 2,
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    foodName: {
        fontSize: 20,
        textAlign: 'right',

    },

    foodCategory: {
        fontSize: 28,
        fontWeight: 'bold',
        color:'#ED2C47',
        textAlign: 'right'
    },

    image: {
        width: 400,
        height: 400,
        borderRadius: 300,
        position: 'absolute',
        top: 80,
        right: -60,
    },

    footer: {
        position: 'absolute',
        bottom: 20,
        padding: 5,
        height: '25%',
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 2,
        justifyContent: 'space-evenly'
    },

    footerBuy: {
        fontSize: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '40%',
        alignItems: 'center'
    },

    
    footerAddCart: {
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        backgroundColor: '#ED2C47',
        borderRadius: 50,
        justifyContent: 'space-evenly',
        height: '70%',
        padding: 5,
    },
})

export default styles;