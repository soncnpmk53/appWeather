import {StyleSheet} from 'react-native';
import {Text,View,TouchableOpacity,Image,} from 'react-native';
const SettingLanguage = () => {
      return (
        <View style = {styles.backgroundImage} >
              <View style = {styles.block1}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}><Image  source={require('../assets/icon/ico_back.png')}></Image></TouchableOpacity>               
                <Text style={{marginLeft:90,fontSize:20,color:'#5065e8'}}>Tùy Chỉnh</Text>
              </View>
        </View>
      )
}
export default SettingLanguage;
const styles = StyleSheet.create({
  backgroundImage: {
      backgroundColor:'#FFF',
      flex:1
  },
  block1:{
     
      flexDirection:'row',
      alignItems:'center',
      marginTop:20,
      marginLeft:36
  },
});