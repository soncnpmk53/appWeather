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



export default class Warning14 extends Component {
    render() {
      return (
        <ImageBackground style = {styles.backgroundImage} source={require('../assets/img/backround1.png')}>
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}><Image  source={require('../assets/icon/ico_place.png')}></Image></TouchableOpacity>
                
                <Text style={{marginLeft:90,fontSize:20,color:'white'}}>Từ Liêm, Hà Nội</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Setting')}><Image style={{marginLeft:75}} source={require('../assets/icon/ico_setting.png')}></Image></TouchableOpacity>
                
              </View>
              <View style = {styles.block1}>
                  <Text style = {{marginTop:20}}></Text>
              </View>
              <View style={{alignItems:'center',justifyContent:'center'}}>
              <View style={{flexDirection:'row'}}>
                  <Text style={{fontSize:50,color:'white'}}>38</Text>
                  <Text style={{fontSize:20,color:'white',marginTop:5}}>oC</Text>
                </View>
                <Text style={{fontSize:28,color:'white', marginTop:10}}>Nhiều Mây</Text>
                <View style={{flexDirection:'row', marginTop:10}}>
                  <Text style={{fontSize:25,color:'white',opacity:0.5}}>Cảm nhận 38</Text>
                  <Text style={{fontSize:15,color:'white',marginTop:5,opacity:0.5}}>oC</Text>
                </View>
              </View>


            <View style={{backgroundColor:'#00000020',height:150,marginTop:20,width:370, borderRadius:30,marginLeft:20}}>
                <Text style={{color:'white', fontSize:20, marginLeft:30, marginTop:10}}>Cảnh báo</Text>
                <View style={{flexDirection:'row', marginLeft:10,marginTop:10}} >
                      <Image style={{height:100,width:100}} source={require('../assets/icon/ico_10_mua_phun.png')}></Image>
                      <Text style={{color:'white', marginLeft:5,flexWrap:'wrap', width:250}}>
                      13-14h, mưa dông mạnh có khả năng xuất hiện. Nhớ mang theo ô, mũ hoặc vật dụng tránh mưa khác.
                      </Text>
                </View>
            </View>



              <View style={{alignItems:'flex-end',marginTop:30, marginRight:40}}>
                <TouchableOpacity>
                    <Text style={{color:'#FFF'}}>Xem Thêm</Text>
                </TouchableOpacity>
              </View>
              
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{flexDirection:'row', marginTop:25}}>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:6}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                <View style={styles.contentView}>
                    <Text style={{color:'white',opacity:0.5}}>10:00</Text>
                    <View style={{flexDirection:'row',marginLeft:7}}>
                      <Text style={{color:'white'}}>28</Text>
                      <Text style={{color:'white'}}>o</Text>
                    </View>
                    <Image style={{marginLeft:5}} source={require('../assets/icon/ico_sunny.png')}></Image>
                    <View style={{flexDirection:'row'}}>
                      <Image source={require('../assets/icon/umbrella.png')}></Image>
                      <Text style={{color:'white'}}>10%</Text>
                    </View>
                </View>
                </View>
              </ScrollView>

              <View style={{backgroundColor:'#00000020',height:60,marginBottom:20,width:380, borderRadius:30,marginLeft:20,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Forecast14Day')}>
                  <Text style={{color:'white', fontSize:20}}>14 Ngày Tới</Text>
                </TouchableOpacity>
              </View>
        </ImageBackground>
      )
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  },

  text:{

  },


  block1:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:30
  },
  contentView: {
    paddingLeft: 16,
    paddingRight: 16,
  },

});