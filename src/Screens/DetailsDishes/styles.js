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
    },

    image: {
        width: 400,
        height: 400,
        borderRadius: 300,
        position: 'absolute',

        top: 80,
        right: -60,
    },

})

export default styles;