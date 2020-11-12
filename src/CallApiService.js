import {getWeb3, getContract} from './tweb3';
import {acc} from '../utils/account';
import AsyncStorage from '@react-native-community/async-storage';
import {ApiService} from './baseApiService';
import {Env} from '../constants/AppConstants';

import {
  toPublicKey,
  stableHashObject,
  sign,
  toPubKeyAndAddress,
  toPubKeyAndAddressBuffer,
} from '@iceteachain/common/src/ecc';
import {
  decode as codecDecode,
  toString as codecToString,
  toDataString as codecToDataString,
  toKeyBuffer as codecToKeyBuffer,
  toKeyString as codecToKeyString,
  isAddressType as codecIsAddressType,
} from '@iceteachain/common/src/codec';
import {ecc} from '@iceteachain/common';
import {signTransaction} from '@iceteachain/common/src/utils';

const tweb3 = getWeb3();
const ct = getContract().methods;

export async function loadUserData(address) {
  try {
    const userData = await ct.getUser(address).call();
    return userData;
  } catch (e) {
    return null;
  }
}
export async function getUsersCompany(companyid, page, limit) {
  try {
    const getuserData = await ct.getUsersByCompany(companyid, {page, limit}).call();
    return getuserData;
  } catch (e) {
    return null;
  }
}

export async function getShopInfo(address) {
  try {
    const shopInfo = await ct.getShop(address).call();

    return shopInfo;
  } catch (e) {
    return null;
  }
}

export async function checkGlobalUser(mneomnic) {
  try {
    const account = (await acc.getAccountMneomnic(mneomnic)) || {};
    if (account) {
      const tokenFCM = (await AsyncStorage.getItem('tokenFCM')) || '';
      const tweb3 = getWeb3();
      tweb3.wallet.importAccount(account.privateKey);
      tweb3.wallet.defaultAccount = account.address;
      const userData = await ct.getUser(account.address).call();
      console.log(userData);
      if (userData && userData.hasOwnProperty('companyid') && userData.hasOwnProperty('tokenFCM') && userData.hasOwnProperty('fullname') && userData.hasOwnProperty('username') && userData.hasOwnProperty('point')) {
        const userInfo = await ct.login(account.address, {tokenFCM}).sendCommit();
        return {u: userInfo.returnValue, a: account};
      } else {
        return {u: undefined, a: account};
      }
    } else {
      return null;
    }
  } catch (e) {
    alert(`Có lỗi trong quá trình đăng nhập, vui lòng thử lại.\n${e}`);
    return null;
  }
}
export async function testLuckyGame() {
  try {
    const result = await ct.LuckyGame1().sendCommit();
    return result;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getGlobalUser(address) {
  try {
    const user = await ct.getGlobalTags(address).call();
    return user;
  } catch (e) {
    return null;
  }
}

export async function getPraiseCompany(companyid, page, limit) {
  try {
    console.log(companyid, page, limit);
    const praiseCompany = await ct.getPraiseByCompany(companyid, {page: page, limit: limit}).call();
    return praiseCompany;
  } catch (e) {
    return [];
  }
}
export async function getPraiseUser(address, page, limit) {
  try {
    const praiseCompany = await ct.getPraiseByAdd(address, {page: page, limit: limit}).call();
    return praiseCompany;
  } catch (e) {
    return [];
  }
}

export async function getGameUser(address, page, limit) {
  try {
    const praiseCompany = await ct.getGamePraise(address, {page: page, limit: limit}).call();
    return praiseCompany;
  } catch (e) {
    return [];
  }
}

export async function getTransferUser(address, page, limit) {
  try {
    const praiseCompany = await ct.getTransferByAdd(address, {page: page, limit: limit}).call();
    return praiseCompany;
  } catch (e) {
    return [];
  }
}

export async function getAdminView(address) {
  try {
    const adminInfo = await ct.getAdmin(address).call();
    return adminInfo;
  } catch (e) {
    return null;
  }
}

export async function signTransactionIcetea(func, params) {
  const options = {};
  const txData = {
    op: 1,
    name: func,
    params: params || [],
  };
  const formData = {};
  formData.from = options.from || '';
  formData.payer = options.payer || '';
  formData.to = Env.ContractsName;
  formData.value = options.value || 0;
  formData.fee = options.fee || 0;
  formData.data = txData;

  const icetea = await tweb3.signTransaction(formData);
  return icetea;
}

export async function sendAbsence(data, address) {
  try {
    const icetea = await signTransactionIcetea('sendAbsence');

    const dataParams = data;
    dataParams.data = icetea;
    // const a = await tweb3.sendRawTransaction(icetea);
    const abs = await ApiService.post('app/absence', dataParams);
    console.log(icetea);
    return abs;
  } catch (e) {
    return [];
  }
}

export function getAuthData(privateKey, publicKey) {
  const tokenKey = codecToString(privateKey);
  const time = Date.now();
  const hash32bytes = stableHashObject({time});
  const signature = sign(hash32bytes, tokenKey).signature;
  const authData = encodeURIComponent(JSON.stringify({publicKey, sign: codecToDataString(signature), time}));
  return authData;
}

export async function getAbsenceType() {
  try {
    const abs = await ApiService.get('app/absence-type');
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsenceReason() {
  try {
    const abs = await ApiService.get('app/reason');
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsence(privateKey, publicKey, limit, page) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    // const hash32 = ecc.stableHashObject({time}, null);
    // const validSignature = ecc.verify(hash32, signature, publicKey);

    const abs = await ApiService.get(`app/absence/?pageSize=${limit}&pageNumber=${page}&data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsenceInfo(privateKey, publicKey) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(`app/absence/info?data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsenceRequest(privateKey, publicKey) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(`admin/absence/request?data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsenceLetterDetail(privateKey, publicKey, id) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(`app/absence/detail/${id}?data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAdminInfo(privateKey, publicKey) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(`app/admin?data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getAbsenceAdminDetail(privateKey, publicKey, id) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(`admin/absence/detail/${id}?data=${authData}`);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function resolveAbsenceAdmin(id, data) {
  try {
    const icetea = await signTransactionIcetea('approveAbsence');
    const dataParams = data;
    dataParams.data = icetea;
    console.log('dataParams: ', dataParams);
    const abs = await ApiService.put(`admin/absence/resolve/${id}`, dataParams);
    return abs;
  } catch (e) {
    return [];
  }
}

export async function getResolveAbsence(privateKey, publicKey, pageSize, pageNumber, month, memberId) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(
      `admin/absence/resolve?data=${authData}&pageSize=${pageSize}&pageNumber=${pageNumber}&month=${month}&memberId=${memberId}`,
      // `admin/absence/resolve?pagSize=${pageSize}&pageNumber=${pageNumber}&data=${authData}`,
    );
    return abs;
  } catch (e) {
    return [];
  }
}

export async function searchMember(privateKey, publicKey, name, pageSize, pageNumber) {
  try {
    const authData = getAuthData(privateKey, publicKey);
    const abs = await ApiService.get(
      `admin/member?name=${name}&data=${authData}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
    );
    return abs;
  } catch (e) {
    return [];
  }
}
