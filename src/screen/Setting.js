import React, {Component,useState,React} from 'react';
import {StyleSheet,Switch} from 'react-native';
import {ScrollView,Text,View,TouchableOpacity,Image} from 'react-native';

const Setting = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(!isEnabled);
      return (
        <View style = {styles.backgroundImage} >
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image  source={require('../assets/icon/ico_back.png')}></Image></TouchableOpacity>               
                <Text style={{marginLeft:90,fontSize:20,color:'#5065e8'}}>Tùy Chỉnh</Text>
              </View>
                <ScrollView>
                    <View style = {{marginLeft : 36, marginTop: 50}}>
                        <Text style={{color:'#5065e8'}}> ĐƠN VỊ</Text>
                        <View style={{marginTop:20, flexDirection:'column', width:350}}>
                            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate('SettingLanguage')}>
                                <Text style={{fontSize:15,flex:1}}>Nhiệt Độ</Text>
                                <View style ={{justifyContent: 'space-between', flexDirection:'row'}} >
                                    <Text style={{fontSize:15}}>oC</Text>
                                    <Image style ={{marginLeft:10}} source={require('../assets/icon/ico_next.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:350}}>
                                <Text style={{fontSize:15,flex:1}}>Tốc Độ Gió</Text>
                                <View style ={{justifyContent: 'space-between',flexDirection:'row'}} >
                                    <Text style={{fontSize:15}}>Km/h</Text>
                                    <Image style ={{marginLeft:10}} source={require('../assets/icon/ico_next.png')}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{marginLeft : 36, marginTop: 50}}>
                        <Text style={{color:'#5065e8'}}> HIỂN THỊ</Text>
                        <View style={{marginTop:20, flexDirection:'column', width:350}}>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:15,flex:1}}>Giao Diện</Text>
                                <View style ={{justifyContent: 'space-between', flexDirection:'row'}} >
                                    <Text style={{fontSize:15}}>Nền Tối</Text>
                                    <Image style ={{marginLeft:10}} source={require('../assets/icon/ico_next.png')}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:350}} onPress={() => navigation.navigate('SettingLanguage')}>
                                <Text style={{fontSize:15,flex:1}}>Ngôn Ngữ</Text>
                                <View style ={{justifyContent: 'space-between',flexDirection:'row'}} >
                                    <Text style={{fontSize:15}}>Tiếng Việt</Text>
                                    <Image style ={{marginLeft:10}} source={require('../assets/icon/ico_next.png')}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{marginLeft : 36, marginTop: 50}}>
                        <Text style={{color:'#5065e8'}}> KHÁC</Text>
                        <View style={{marginTop:20, flexDirection:'column', width:350}}>
                            <View style={{flexDirection:'row',marginTop:20,width:350}}>
                                <Text style={{fontSize:15,flex:1}}>Nhận Cảnh báo</Text>
                                <View style={styles.container}>
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {{marginLeft : 36, marginTop: 50}}>
                        <Text style={{color:'#5065e8'}}> THÔNG TIN ỨNG DỤNG</Text>
                        <View style={{marginTop:20, flexDirection:'column', width:350}}>
                            <TouchableOpacity style={{flexDirection:'row'}}>
                                <Text style={{fontSize:15,flex:1}}>Giới thiệu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:'row',marginTop:20,width:350}}>
                                <Text style={{fontSize:15,flex:1}}>Điều khoản sử dụng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>  
        </View>
      )
}
export default Setting;
const styles = StyleSheet.create({
  backgroundImage: {
      backgroundColor:'#FFF',
      flex:1
  },
  container: {
    alignItems: "center",
    flexDirection:'row',
    justifyContent: 'space-between'
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