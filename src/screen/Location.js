import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollViewComponent,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';



export default class Location extends Component {
    render() {
      return (
        <View style = {styles.backgroundImage} >
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image  source={require('../assets/icon/ico_back.png')}></Image></TouchableOpacity>               
                <Text style={{marginLeft:90,fontSize:20,color:'#5065e8'}}>Quản lý vị trí</Text>
              </View>
                <View  style={{marginLeft:16,marginRight:16,marginTop:20,flexDirection:'row',backgroundColor:'#e1edfe', borderRadius:30, height:48}}>
                    <Image style={{marginTop:8, marginLeft:10}} source={require('../assets/icon/ico_sunny.png')}/>
                    <TextInput style={{marginLeft:20}}
                    placeholder="Nhập vị trí cần tìm"
                    placeholderTextColor={'#507ee8'}
                    autoCapitalize="none"
                    />
                </View>
                <ScrollView>
                    <View style={{height:80, backgroundColor:'#426bb5', borderRadius:20, marginLeft:16,marginRight:16,flexDirection:'row',marginTop:10}}>
                        <View style={{marginLeft:30,width:70, marginTop:20}}>
                            <Text style={{color:'#FFF'}}>Từ Liêm</Text>
                            <Text style={{opacity:0.3, marginTop:3, color:'#FFF'}}>Hà Nội</Text>
                        </View>

                        <View style={{marginLeft:120, marginTop:15,flexDirection:'row'}}>
                            <Image style={{marginTop:8, marginLeft:10,width:50}} source={require('../assets/icon/ico_sunny.png')}/>
                            <Text style={{marginLeft:10, fontSize:30,color:'#FFF'}}>28o</Text>
                        </View>
                    </View>
                    <View style={{height:80, backgroundColor:'#5290fc', borderRadius:20, marginLeft:16,marginRight:16,flexDirection:'row',marginTop:10}}>
                        <View style={{marginLeft:30,width:70, marginTop:20}}>
                            <Text style={{color:'#FFF'}}>Từ Liêm</Text>
                            <Text style={{opacity:0.3, marginTop:3, color:'#FFF'}}>Hà Nội</Text>
                        </View>

                        <View style={{marginLeft:120, marginTop:15,flexDirection:'row'}}>
                            <Image style={{marginTop:8, marginLeft:10,width:50}} source={require('../assets/icon/ico_sunny.png')}/>
                            <Text style={{marginLeft:10, fontSize:30,color:'#FFF'}}>28o</Text>
                        </View>
                    </View>
                    <View style={{height:80, backgroundColor:'#e3b064', borderRadius:20, marginLeft:16,marginRight:16,flexDirection:'row',marginTop:10}}>
                        <View style={{marginLeft:30,width:70, marginTop:20}}>
                            <Text style={{color:'#FFF'}}>Từ Liêm</Text>
                            <Text style={{opacity:0.3, marginTop:3, color:'#FFF'}}>Hà Nội</Text>
                        </View>

                        <View style={{marginLeft:120, marginTop:15,flexDirection:'row'}}>
                            <Image style={{marginTop:8, marginLeft:10,width:50}} source={require('../assets/icon/ico_sunny.png')}/>
                            <Text style={{marginLeft:10, fontSize:30,color:'#FFF'}}>28o</Text>
                        </View>
                    </View>
                </ScrollView>




              
        </View>
      )
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
      backgroundColor:'#FFF',
      flex:1
  },

  icon:{
    
    height:60,
    backgroundColor:'black',
    opacity:0.3, 
    borderRadius:40, 
    width:400, 
    marginTop:25,
    marginLeft:6,
    alignItems:'center',
    flexDirection:'row',
  },
  block1:{
     
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:36
  },
  contentView: {
    paddingLeft: 16,
    paddingRight: 16,
  },
});