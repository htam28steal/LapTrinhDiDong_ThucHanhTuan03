import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Screen1_c = ({ navigation })  => { 
  return (
       <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}  // Màu gradient từ xanh nhạt đến xanh đậm
      locations={[0, 0.2, 0.6, 0.95, 1,]}
      style={styles.container}>
        <View style={styles.viewHead}>
           <Text style={styles.txtHead}>CODE</Text>
         </View>
          <View style={styles.viewBody}>
            <Text style={styles.txtGrow}>VERIFICATION</Text>
         </View>
           <View style={styles.viewTilte}>
            <Text style={styles.txtWe}>Enter onetime password set on ++849092605798</Text>
         </View>
          <View style={styles.viewTilte}>
              <View style={styles.txtCodeInput}></View>
              <View style={styles.txtCodeInput}></View>
              <View style={styles.txtCodeInput}></View>
              <View style={styles.txtCodeInput}></View>
              <View style={styles.txtCodeInput}></View>
              <View style={styles.txtCodeInput}></View>
          </View>

         <View style={styles.viewButton}>
            <TouchableOpacity style={styles.buttonTouch}  onPress={() => navigation.navigate('ScreenFirst')}>VERIFY CODE</TouchableOpacity>
         </View>
    </LinearGradient>
  );
};

const styles  = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00CCF9',
    width:360,
    paddingTop:30
  },
  viewHead:{
    flex:2,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  viewBody:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  txtGrow:{
    width:133,
    height:58,
    fontWeight:'bold',
    textAlign: 'center',
    fontSize:19
  },
   viewTilte:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:302,
    height:36,
    marginLeft:30,
  },
  txtWe:{
    fontWeight:700,
    textAlign: 'center',
    fontSize:15,
    marginBottom:70
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
    width:305,
    height:45,
    backgroundColor:'#E3C000',
    fontSize:20,
    fontWeight:700 ,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'Rotobo',
    marginBottom:70
  },
  txtCodeInput:{
    width:50,
    height:50,
    borderColor:'black',
    borderWidth:2
  },
  txtHead:{
    width:154,
    height:70,
    fontSize:58,
    fontWeight:700
  }
});
export default  Screen1_c ;