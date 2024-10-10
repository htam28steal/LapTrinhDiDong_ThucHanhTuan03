import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';

const Screen1_e = ({ navigation })  => {
  return (
    <View
      style={styles.container}>
        <View style={styles.viewContent}>
          <Text style={styles.txtContent}>REGISTER</Text>
        </View>
        <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Name</Text>
        </View>
         <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Phone</Text>
        </View>
         <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Email</Text>
        </View>
            <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Password</Text>
          <Image source={require('./assets/icons/show.png')} style={styles.imgShow}/>
        </View>
         <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Birthday</Text>
        </View>
         <View style={styles.viewGender}> 
            <View>
              <Image source={require('./assets/icons/dry-clean.png')} style={{width:23,height:23}}/>
            </View>
            <Text style={{fontWeight:600}}>Male</Text>
            <View>
               <Image source={require('./assets/icons/dry-clean.png')} style={{width:23,height:23}}/>
            </View>
            <Text style={{fontWeight:600}}>Female</Text>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonTouch}>LOGIN</TouchableOpacity>
        </View>
      
        <View>
          <View style={styles.viewDecrip}>
            <Text style={{fontSize:15, fontWeight:500,marginBottom:30}}>When you agree to terms and conditons</Text></View>
        </View>
      
    </View>
  );
};

const styles  = StyleSheet.create({
  container:{
    flex:1,
    width:360,
    height:640,
   backgroundColor:'#cff7d3'
  },
  viewContent:{
    flex:3,
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  txtContent:{
    fontSize:30,
    fontWeight:700
  },
  viewFrame:{
    display:'flex',
    width:330,
    height:54,
    backgroundColor:'#a1e8b9',
    marginBottom:20,
    marginLeft:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingRight:15

  },
  txtBody:{
    fontWeight:500,
    fontSize:15,
    marginLeft:15
  },
  imgShow:{
    width:38,
    height:36
  },
  viewButton:{
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:50,
  },
  buttonTouch:{
    width:330,
    height:45,
    backgroundColor:'#f24822',
    color:'#fff',
    fontSize:20,
    fontWeight:700 ,
    alignItems:'center',
    justifyContent:'center',
    fontFamily:'Rotobo',
 
  },
  viewDecrip:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:15
  },
  viewGender:{
    width:330,
    height:50,
    flexDirection:'row',
    justifyContent:'space-around',
  }
});
export default Screen1_e;