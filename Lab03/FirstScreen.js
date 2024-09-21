import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';
const FirstScreen = ({ navigation })  => {
  return (
    <View style={styles.container}>
        <View style={styles.viewHead}>
            <View style = {styles.circle}> </View>
         </View>
          <View style={styles.viewBody}>
            <Text style={styles.txtGrow}>GROW {'\n'}YOUR BUSINESS</Text>
         </View>
           <View style={styles.viewTilte}>
            <Text style={styles.txtWe}>We will help you to grow your buiness using online server</Text>
         </View>
         <View style={styles.viewButton}>
            <TouchableOpacity style={styles.buttonTouch}  onPress={() => navigation.navigate('Screen1_a')}>LOGIN</TouchableOpacity>
            <TouchableOpacity style={styles.buttonTouch}>SIGN UP</TouchableOpacity>
         </View>
    </View>
  );
};

const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00CCF9',
    width:360,

  },
  viewHead:{
    flex:3,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  circle:{
    borderWidth:15,
    width:140,
    height:140,
    borderColor: 'black',
    borderRadius: '50%',

  },
  viewBody:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  txtGrow:{
    width:189,
    height:58,
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:20
  },
   viewTilte:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:302,
    height:36,
    marginLeft:30

  },
  txtWe:{
    fontWeight:700,
    textAlign: 'center',
    fontSize:15
  },
  viewButton:{
    flex:3,
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:50,
  },
  buttonTouch:{
    width:119,
    height:48,
    borderRadius:10,
    backgroundColor:'#E3C000',
    fontSize:20,
    fontWeight:700 ,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'Rotobo'
  }
});
export default FirstScreen;