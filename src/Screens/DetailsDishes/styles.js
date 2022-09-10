import { StyleSheet } from "react-native"

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

export default styles;