import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    
    intro: {
      width: '100%',
      padding: 20,
      justifyContent: 'center',
    },
  
    delivery:{
      padding: 20,
      width: '100%',
    },
  
    promotions: {
      marginRight: 10,
    },
    servicesRow: {
      borderColor: '#ED2C47',
      borderWidth: 1,
      width: '25%',
      marginBottom: 20
      },
  
    allServices: {
      height: 90,
      width: 60,
      borderRadius: 60,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 25
  
    },
  
    iconInsideService: {
      paddingBottom: 4,
      paddingHorizontal: 5,
      borderRadius: 60,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      marginBottom: 5
    },
  
    services: {
      marginRight: 25,
      height: 90,
      width: 60,
      borderRadius: 60,
      alignItems: 'center',
      padding: 3,
      backgroundColor: '#ED2C47',
    },
  
    popularContainer: {
      width: 150,
      height: 200,
      alignItems: 'center',
      paddingTop: 35,
      marginRight: 30,
    },
  
    popularEffect: {
      borderRadius: 15,
      width: '100%', 
      height: '100%',
      paddingTop: 80,
      backgroundColor: '#ED2C47',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
  
    popularViewImage: {
      width: 100, 
      height: 100,
      position: 'absolute',
      zIndex: 2
    },
  
    popularViewInfo: {
      width: '100%',
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10
    }
});
  

export default styles