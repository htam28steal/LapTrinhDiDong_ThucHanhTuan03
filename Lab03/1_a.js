import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Screen1_a = ({ navigation })  => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}  // Màu gradient từ xanh nhạt đến xanh đậm
      locations={[0, 0.2, 0.6, 0.95, 1,]}
      style={styles.container}>
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
            <TouchableOpacity style={styles.buttonTouch}  onPress={() => navigation.navigate('Screen1_d')}>LOGIN</TouchableOpacity>
            <TouchableOpacity style={styles.buttonTouch} onPress={() => navigation.navigate('Screen1_b')}>SIGN UP</TouchableOpacity>
         </View>
         <View style={styles.viewBottom} >
         <Text style={styles.txtBottom}>HOW WE WORK?</Text>
         </View>
    </LinearGradient>
  );
};

const styles  = StyleSheet.create({
  container:{
    flex:1,
    width:360,
    paddingTop:50
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
    marginBottom:0,
    paddingBottom:0
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
  },
  viewBottom:{
    flex:2,
    width:'100%',
    alignItems:'center',
  },
  txtBottom:{
    fontSize:18,
    fontWeight:700,
  }
});
export default Screen1_a;