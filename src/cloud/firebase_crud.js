import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';
import 'firebase/firestore';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionType from '../constant/constant';

// firebase.firestore().settings({ timestampsInSnapshots: true })

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

const ArrayGenaratorWallet = (wallet, transcetion) => {

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


const InserData = (wallet, transcetion, DB) => {
    let ResultIs;

    if(transcetion == null){

            if(wallet.length == undefined){
                if(wallet.wallet_id !== 'Testing'){
                    ResultIs = ArrayGenaratorWallet(wallet, transcetion)
                }else{
                    console.log('wallet_id' + ' = ' + wallet.wallet_id)    
                }
            }else{
                console.log(wallet, transcetion)            
            }

    }else{

        if(wallet.length == undefined){
            if(wallet.wallet_id !== 'Testing'){
                ResultIs = ArrayGenaratorWallet(wallet, transcetion)
            }else{
                console.log('wallet_id' + ' = ' + wallet.wallet_id)    
            }
        }else{
            ResultIs = ArrayGenaratorWallet(wallet, transcetion)            
        }

    }

    try{
        DB.set({
            data: ResultIs
           }).then((e) => {
               console.log('okk done')
           }).catch((err) => {
               console.log("err", err)
           })
    }catch{
        console.log('coud save problem Init')
    }

}

const DataGenarator = (cloudData, wallet, transcetion) => {
    let ResultIs;

    if(transcetion == null){

            if(wallet.length == undefined){
                if(wallet.wallet_id !== 'Testing'){
                    ResultIs = ArrayGenaratorWallet(wallet, transcetion)
                    console.log('reslut', ResultIs);
                }else{
                    console.log('wallet_id' + ' = ' + wallet.wallet_id)    
                }
            }else{
                console.log(wallet, transcetion)            
            }

    }else{

        if(wallet.length == undefined){
            if(wallet.wallet_id !== 'Testing'){
                ResultIs = ArrayGenaratorWallet(wallet, transcetion)
            }else{
                console.log('wallet_id' + ' = ' + wallet.wallet_id)    
            }
        }else{
            ResultIs = ArrayGenaratorWallet(wallet, transcetion)            
        }

    }
}

const CludDataUpdate = (cloudData, wallet, transcetion) => {
     call(DataGenarator, cloudData, wallet, transcetion)
}

const getMarker = (action) => {

    const DB = firebase.firestore().collection('AllUserData').doc(action.userID);

    DB.get().then(function(doc) {
        if (doc.exists) {
            console.log("ErrorISS", action);
            CludDataUpdate(doc.data().data, action.wallet, action.transcetion);
        } else {
            InserData(action.wallet, action.transcetion, DB); //new user new data
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

const LoadData = (action) => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
    }else{
       getMarker(action)
    }

 }

export const CloudService = function* (action){
    yield call(LoadData, action)
    yield put({ type: actionType.SYNC_CLOUD })
}
