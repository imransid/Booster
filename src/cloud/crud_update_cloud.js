import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';
import 'firebase/firestore';
import { ArrayGenaratorWallet } from './firebase_crud';
import { AsyncStorage } from "react-native";

const InitDataBaseCheck = async (DB) => {
    try{

       let result = await DB.get().then(function(doc) {
            if (doc.exists) {
                return doc.data().data;
                //CludDataUpdate(doc.data().data, action.wallet, action.transcetion);
            } else {
                return true;
            }            
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

        return result

    }catch{
        console.log("Connection ERRoR")
    }

}

const TransectionUpdate = async (wallet, transcetion) => {
    let result;
        if(transcetion.length == undefined){
            result = transcetion;
            result.syncStatus = true;

        }else{
            result = transcetion.map((e) => {
                if(e.syncStatus == false){
                    e.syncStatus = true
                }
                return e
            });

        }
    return result;
}

const AddDataBaseData = async (DB, InitialArrayResultIs) => {
    try{

       let result = await DB.set({
                data: InitialArrayResultIs
            }).then((e) => {
                return true
            }).catch((err) => {
                return false
            });

        return result

    }catch{
        console.log("Connection ERRoR")
    }

}

const _storeTransecData = async (transcetion) => {
    try {
      return await AsyncStorage.setItem('transection@Data', JSON.stringify(transcetion)).then(()=>{
          return true;
      });
    } catch (error) {
      // Error saving data
      console.log("Error is now sync transection")
    }
  };

export const cloud_Data_Check = async (userID, wallet, transcetion) => {
    const DB = firebase.firestore().collection('AllUserData').doc(userID);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
    }else{
        let result = await InitDataBaseCheck(DB)
        let storeTransecData;
        if(result == true){
            if(wallet.wallet_id == 'Testing'){
                alert("You Cann't Cloud DataBase Add Initial Card..");
            }else{
                let InitialArrayResultIs, storeTransecData, resultIs;

                if(transcetion == null || transcetion.length == undefined || transcetion.length == 0){
                    if(transcetion.IconCode){
                        InitialArrayResultIs = ArrayGenaratorWallet(wallet, transcetion);
                        resultIs = await TransectionUpdate(wallet, transcetion);
                        storeTransecData = await _storeTransecData(resultIs);
                    }else{
                        let data = null;
                        InitialArrayResultIs = ArrayGenaratorWallet(wallet, data);
                    }
                }else{
                        InitialArrayResultIs = ArrayGenaratorWallet(wallet, transcetion);
                        resultIs = await TransectionUpdate(wallet, transcetion);
                        storeTransecData = await _storeTransecData(resultIs);

                }
                
                if(storeTransecData == true){
                 let resultCloud = await AddDataBaseData(DB, InitialArrayResultIs);
                    if(resultCloud == true ){
                        return true
                    }else{
                        return false
                        }
                }
            }
        }
    }
    
}