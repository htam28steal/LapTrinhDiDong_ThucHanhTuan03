import React from 'react';
import {View, Image,Text, StyleSheet,TouchableOpacity} from 'react-native';

const Screen1_d = ({ navigation })  => {
  return (
    <View
      style={styles.container}>
        <View style={styles.viewContent}>
          <Text style={styles.txtContent}>LOGIN</Text>
        </View>
        <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Email</Text>
        </View>
        <View style={styles.viewFrame}> 
          <Text style={styles.txtBody}>Password</Text>
          <Image source={require('./assets/icons/show.png')} style={styles.imgShow}/>
        </View>
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.buttonTouch}>LOGIN</TouchableOpacity>
        </View>
        <View>
          <View style={styles.viewDecrip}>
            <Text style={{fontSize:15, fontWeight:500}}>When you agree to terms and conditons</Text></View>
          <View style={styles.viewDecrip} >
            <Text style={{fontSize:15 , color:'#9747ff', fontWeight:500}}>For got your password?</Text></View>
          <View style={styles.viewDecrip}>
            <Text style={{fontSize:15, fontWeight:500}}>Or login with</Text></View>
        </View>
         <View style={styles.viewTilte}>
              <View style={[styles.txtCodeInput,{backgroundColor:'#007be5'},{borderColor:'#007be5'}]}>
                <Image source={require('./assets/icons/facebook.png')} style={styles.imgIcons} />
              </View>
              <View style={[styles.txtCodeInput,{backgroundColor:'#0d99ff'},{borderColor:'#0d99ff'}]}>
                 <Image source={require('./assets/icons/z.png')} style={[styles.imgIcons]} />
              </View>
              <View style={[styles.txtCodeInput,{borderColor:'#0d99ff'}]}>
                <Image source={require('./assets/icons/google.png')} style={styles.imgIcons} />
              </View>
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
    flex:2,
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
    marginBottom:30,
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
    marginTop:40,
  },
  buttonTouch:{
    width:305,
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
     viewTilte:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:36,
   
  },
   txtCodeInput:{
    width:100,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'black',
    borderWidth:2
  },
  imgIcons:{
    height:35,
    width:35,
  }
});
export default Screen1_d;