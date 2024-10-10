import React from 'react';
import {View, Image} from 'react-native';


const TestView = () => {
  return (
    <View style= {{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'flex-end'
    }}>
      <Image source={{uri:'../Pic/KevinDeBruyne.jpg'}}style={{width:200, height:200}}/>
      
    </View>
  );
};

export default TestView;