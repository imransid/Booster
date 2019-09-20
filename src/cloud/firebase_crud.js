import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';
import 'firebase/firestore';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionType from '../constant/constant';
import {cloud_Data_Check} from './crud_update_cloud';
import { AsyncStorage, ToastAndroid } from "react-native";
// firebase.firestore().settings({ timestampsInSnapshots: true })

async function SettingLocalUpdater(){
    try{
            const data = await AsyncStorage.getItem('setting@Data');
            let result;
            if(data !== null){
                let data_load = JSON.parse(data);
                
                result = { 
                    'sync': true,
                    'eventnotification': data_load.eventnotification,
                    'alert': data_load.alert,
                    'email': data_load.email,
                    'name' : data_load.name,
                    'picURL': data_load.picURL
                }

                AsyncStorage.setItem("setting@Data", JSON.stringify(result)).then(() => {
                    console.log('Setting job done')
                });

            }else{
                console.log("Setting Have No Datas")
            }
        }catch{
            console.log("Setting Async Error")
        }
}


const ArrayGenaratorTransection = (id, transcetion) => {
    let result = [];
    let loadDatain;

    if(transcetion.length == undefined){
        if(transcetion.walletId == id){
            loadDatain = {
                'amount': transcetion.amount,
                'description': transcetion.description,
                'selectCategory': transcetion.selectCategory,
                'date': transcetion.date,
                'colorCode': transcetion.colorCode,
                'IconCode': transcetion.IconCode,
                'IconName': transcetion.IconName,
                'walletId': transcetion.walletId,
                'transectionid': transcetion.transectionid,
                'syncStatus': true
            }
        }else{
            loadDatain = null
        }
    }else{
        transcetion.map((e) => {
            e.walletId == id ? result.push(e) : result = null
        })            
    }
    
    if(transcetion.length == undefined){
        return loadDatain
    }
    else{
        return result
    }

}

export const ArrayGenaratorWallet = (wallet, transcetion) => {

    let loadDatain;
    let result = [];
    if(wallet.length == undefined){
            loadDatain = {
                'card_holder_name': wallet.card_holder_name,
                'bank_code': wallet.bank_code,
                'balance': wallet.balance,
                'avalible_balance': wallet.balance,
                'balance_type': wallet.balance_type,
                'wallet_add_date': wallet.wallet_add_date,
                'card_num': wallet.card_num,
                'wallet_id': wallet.wallet_id,
                'transection': transcetion == null ? null : ArrayGenaratorTransection(wallet.wallet_id, transcetion)
            }

    }else{
        wallet.map((e) => {
            loadDatain = {
                'card_holder_name': e.card_holder_name,
                'bank_code': e.bank_code,
                'balance': e.balance,
                'avalible_balance': e.balance,
                'balance_type': e.balance_type,
                'wallet_add_date': e.wallet_add_date,
                'card_num': e.card_num,
                'wallet_id': e.wallet_id,
                'transection': transcetion == null ? null : ArrayGenaratorTransection(e.wallet_id, transcetion)
            }
            result.push(loadDatain)
        })            
    }

    if(wallet.length == undefined){
        return loadDatain
    }else{
        return result
    }
}


const DataGenarator = (cloudData, wallet, transcetion) => {
    let ResultIs;
    cloud_Data_Check(cloudData, wallet, transcetion)

}

const CludDataUpdate = (cloudData, wallet, transcetion) => {
    DataGenarator(cloudData, wallet, transcetion)
}


export const CloudService = function* (action){
    const DB = firebase.firestore().collection('AllUserData').doc(action.userID);

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseconfig);
        }else{
            try{

                    let result

                    result = yield DB.get().then(function(doc) {
                        if (doc.exists) {
                            return doc.data().data;
                            //CludDataUpdate(doc.data().data, action.wallet, action.transcetion);
                        } else {
                            return true;
                            //InserData(action.wallet, action.transcetion, DB); //new user new data
                        }            
                        }).catch(function(error) {
                            console.log("Error getting document:", error);
                        });

                    if(result == true){

                        if(action.wallet.wallet_id == 'Testing'){
                            yield put({ type: actionType.SYNC_CLOUD, sync: false, loadedData: false, WalidChker: true })
                        }else{
                            const InitialArrayResultIs = yield call(InserData, action.wallet, action.transcetion);
                            
                            if(InitialArrayResultIs){

                                try{
                                        yield DB.set({
                                                data: InitialArrayResultIs
                                            }).then((e) => {
                                                console.log('okk done')
                                            }).catch((err) => {
                                                console.log("err", err)
                                            });
                                        
                                        yield call(SettingLocalUpdater);
    
                                        yield put({ type: actionType.SYNC_CLOUD, sync: true, loadedData: false, WalidChker: false })
                                        
                                    }catch{
                                        console.log('coud save problem Init')
                                    }
    
                            }else{
                                console.log('No InitialArrayResultIs Coming', InitialArrayResultIs)
                            }
                        }

                    }else{
                        console.log('DATA COme From Server', result)   
                    }

                }catch{
                    console.log("Error getting firebase DB :", error);
                }
        }

}