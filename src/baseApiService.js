import {Platform} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-toast-message';
import {Env} from '../constants/AppConstants';
const baseURL = `${Env.ServerUrl}/`;
import DeviceInfo from 'react-native-device-info';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const isIphoneX = DeviceInfo.hasNotch();

export const ApiService = {
  successCallBack: (resolve, reject, res, alert) => {
    if (alert) {
      Toast.show({
        type: 'success',
        text1: 'Thực hiện thành công!!!',
      });
    }
    return resolve(res.data);
  },

  errorCallBack: (reject, error) => {
    Toast.show({
      type: 'error',
      topOffset: Platform.OS === 'android' ? 0 : isIphoneX ? 36 : getStatusBarHeight(),
      text1: 'Không lấy được thông tin, vui lòng thử lại!!!',
    });
    console.log(error);
    if (error?.response?.status === 401) {
      console.log(error.response);
    }
    return reject(error);
  },

  get: async (url, alert) => {
    console.log('~~~~~~~' + baseURL + url);
    //let authorization = store.getState().authReducer.userData.token;
    //console.log(authorization);
    //axios.defaults.headers.common.authorization = 'Bearer ' + authorization;
    return new Promise((resolve, reject) => {
      axios.get(baseURL + url).then(
        (res) => {
          ApiService.successCallBack(resolve, reject, res, alert);
        },
        (error) => {
          ApiService.errorCallBack(reject, error);
        },
      );
    });
  },
  post: async (url, data, alert) => {
    console.log('~~~~~~~' + baseURL + url);
    console.log('~~~~~~~', data);
    // let strToken =
    //   store.getState().authReducer.userData === null
    //     ? ''
    //     : store.getState().authReducer.userData.token;
    // let authorization = strToken;
    // console.log('~~~~~~~' + strToken);
    // axios.defaults.headers.common.authorization = authorization;
    // if (store.getState().authReducer.userData) {
    //   let authorization = store.getState().authReducer.userData.token;
    //   console.log(authorization);
    //   axios.defaults.headers.common.authorization = 'Bearer ' + authorization;
    // }
    return new Promise((resolve, reject) => {
      axios.post(baseURL + url, data).then(
        (res) => {
          ApiService.successCallBack(resolve, reject, res, alert);
        },
        (error) => {
          ApiService.errorCallBack(reject, error);
        },
      );
    });
  },
  put: async (url, data, alert) => {
    console.log('~~~~~~~' + baseURL + url);
    // let authorization = (await AsyncStorage.getItem('token')) || '';
    // axios.defaults.headers.common.authorization = authorization;
    return new Promise((resolve, reject) => {
      axios.put(baseURL + url, data).then(
        (res) => {
          ApiService.successCallBack(resolve, reject, res, alert);
        },
        (error) => {
          ApiService.errorCallBack(reject, error);
        },
      );
    });
  },
  delete: async (url, data, alert) => {
    console.log(url);
    let authorization = (await AsyncStorage.getItem('token')) || '';
    axios.defaults.headers.common.authorization = authorization;
    return new Promise((resolve, reject) => {
      axios.delete(url, data).then(
        (res) => {
          ApiService.successCallBack(resolve, reject, res, alert);
        },
        (error) => {
          ApiService.errorCallBack(reject, error);
        },
      );
    });
  },
};
