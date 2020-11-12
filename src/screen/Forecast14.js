import React, {Component,useState} from 'react';
import {StyleSheet,Switch} from 'react-native';
import {ScrollView,Text,View,TouchableOpacity,Image,} from 'react-native';

const Forecast14 = () => {
      return (
        <View style = {styles.backgroundImage} >
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image  source={require('../assets/icon/ico_back.png')}></Image></TouchableOpacity>               
                <Text style={{marginLeft:90,fontSize:20,color:'#5065e8'}}>Từ Liêm, Hà Nội</Text>
              </View>
              <View style={{marginLeft:160,marginTop:10}}><Text><Text style={{fontSize:17,color:'#5065e8'}}>14 ngày tới</Text></Text></View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flex:8}}>
                    <View style={{flexDirection:'row', marginTop:25}}>
                        <Text>LOL</Text>
                    </View>
              </ScrollView>
                 
        </View>
      )
}
export default Forecast14;
const styles = StyleSheet.create({
  backgroundImage: {
      backgroundColor:'#FFF',
      flex:1
  },
  contentView: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  block1:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:36
  },
  
});