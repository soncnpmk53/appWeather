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



export default class ForecastDay extends Component {
    render() {
      return (
        <View style = {styles.backgroundImage} >
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image  source={require('../assets/icon/ico_back.png')}></Image></TouchableOpacity>
                
                <Text style={{marginLeft:90,fontSize:20,color:'#5065e8'}}>Từ Liêm, Hà Nội</Text>
              </View>

              <View style={styles.icon}>
                <View style={{marginLeft:40,flexDirection:'row'}}>
                  <Image style={{flexDirection:'column',width:40,height:40}} source={require('../assets/icon/ico_time.png')}></Image>
                  <Image style={{flexDirection:'column',width:40,height:40, marginLeft:60}} source={require('../assets/icon/ico_degree.png')}></Image>
                  <Image style={{flexDirection:'column',width:40,height:40,marginLeft:60}} source={require('../assets/icon/ico_wind.png')}></Image>
                  <Image style={{flexDirection:'column',width:40,height:40,marginLeft:50}} source={require('../assets/icon/ico_rain.png')}></Image>
                </View>
              </View>
              <ScrollView>
                  <View style={{marginTop:15}}>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>                   
                    </View>                
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>
                        
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>

                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>                       
                    </View>
                    <View style={{flexDirection:'row',height:80,alignItems:'center', marginLeft:15}}>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>10:10</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>21/09</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                            <Image style={{height:20,width:40,marginBottom:10}} source={require('../assets/icon/ico_sunny.png')}></Image>
                            <Text style={{fontSize:15}}>28o</Text>
                          </View>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Cảm nhận 36o</Text>
                        </View>
                        <View style={{marginLeft:25}}>
                          <Text style={{fontSize:15}}>7 KM/h</Text>
                          <View style={{flexDirection:'row',marginTop:7}}>
                            <Image style={{marginTop:7}} source={require('../assets/icon/ico_cursor.png')}></Image>
                            <Text style={{marginLeft:3,color:'black',opacity:0.5}}>TTN</Text>
                          </View>
                        </View>
                        <View style={{marginLeft:25,alignItems:'center'}}>
                          <Text style={{fontSize:17}}>0%</Text>
                          <Text style={{fontSize:15,color:'black',opacity:0.5}}>Mưa Vừa</Text>
                        </View>  
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
    backgroundColor:'#00000020',
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