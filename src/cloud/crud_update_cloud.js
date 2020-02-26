import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';
import 'firebase/firestore';
import { _SaveAllData } from './Store_all_data';
import { CloudInitDataBase } from './firebase_crud';
import {  _ArrayValueCheck } from './Arraymixer';
import { TransectionStatus, WalletStatus, _storeTransecData, _storeWalletData } from './crud_local_DB';


// come from setting and return setting
export const cloud_Data_Check = async (userID, walletOLD, transcetionOLD) => {
    const DB = firebase.firestore().collection('AllUserData').doc(userID);
    var transcetion = await TransectionStatus();
    var wallet = await WalletStatus();

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
    }else{
        //checking database..
        let result = await CloudInitDataBase(DB)
        if(result === true){ // result is true when cloud have no data..

            if(wallet.wallet_id == 'Testing'){
                alert("You Cann't Use Cloud DataBase Using Initial Card..");
            }else{
                //return _SaveAllData(wallet, transcetion, true, DB);
            }
        }
        else{ //when cloud have data

                let ResultGen = await _ArrayValueCheck(result, wallet, transcetion)

                let Final_transection = ResultGen[0];
                let Final_wallet = ResultGen[1];


                return _SaveAllData(Final_wallet, Final_transection, false, DB)


        }
    }
    
}

