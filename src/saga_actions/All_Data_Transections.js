import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from '../constant/constant';
async function retrieveWalletCard(){
    try{
        const data = await AsyncStorage.getItem('wallet@Card');

        if(data !== null){
            let data_load = JSON.parse(data);
            return data_load
        
        }else{
            return null
        }
    } catch (error){
        console.log('async retrive prlm', error)
    }
}

async function retrieveWalletDetails(walletIdNo){
    try{
        const data = await AsyncStorage.getItem('wallet@Card');

        if(data !== null){
            let data_load = JSON.parse(data);
            let wallet_detaits_result;
            
            if(data_load.length != undefined){
                data_load.map((e)=> {
                    e.wallet_id == walletIdNo ? wallet_detaits_result = e : null
                })
            }else{
                data_load.wallet_id == walletIdNo ? wallet_detaits_result = data_load : null
            }

            return wallet_detaits_result;
        
        }else{
            return null
        }
    } catch (error){
        console.log('async retrive prlm', error)
    }
}

async function retrieveTransection(walletIdNo){
    try{
        const data = await AsyncStorage.getItem('transection@Data');

        if(data !== null){
            let data_load = JSON.parse(data);
            
            let output_result;
            if(data_load.length != undefined){
                output_result = data_load.map( e => 
                     e.walletId == walletIdNo ? e : null  
                )

                output_result = output_result.filter( e =>
                    e != null
                )
                
            }else{
                data_load.walletId == walletIdNo ? output_result = data_load : output_result = null
            }

            return output_result
        
        }else{
            return null
        }
    } catch (error){
        console.log('async retrive prlm', error)
    }
}

export const all_Transection = function* (action){

    const retive_data = yield call(retrieveTransection, action.walletId);
    const retive_data_wallet = yield call(retrieveWalletCard);
    const retive_wallet_details = yield call(retrieveWalletDetails, action.walletId)
    yield put({ type: actionType.TRANSECTION_RESULT, result: retive_data, result_wallet: retive_data_wallet, wallet_detaits : retive_wallet_details })
    
}

const UpdateBalance = function*(walletid, amounT){
    try{
        AsyncStorage.getItem('wallet@Card').then(res => {
            let data = JSON.parse(res);
            let result = [];
            let avamount;
            if(data.length == undefined){
                data.balance == 0 ? avamount = 0 : avamount = data.balance - amounT;
                result = {
                    'card_holder_name': data.card_holder_name,
                    'bank_code': data.bank_code,
                    'balance': data.balance,
                    'avalible_balance': avamount,
                    'balance_type': data.balance_type,
                    'wallet_add_date': data.wallet_add_date,
                    'card_num': data.card_num,
                    'wallet_id': data.wallet_id
                }
            } else{

            let objIndex = data.findIndex(obj => obj.wallet_id === walletid)
            let updateObj = { ...data[objIndex], avalible_balance : data[objIndex].avalible_balance - amounT }
            result = [
                ...data.slice(0, objIndex), updateObj, ...data.slice(objIndex + 1)
            ];
            }

            
            AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
              //  update new value succcessfully
            });
        })
    }
    catch (error){
        console.log('async save prlm', error)
    }

}

async function createNewTransection(action){
    try{
        AsyncStorage.getItem('transection@Data').then(res => {
            let data = JSON.parse(res);
            let result = []
            if (data === null) {
                result = {
                    'amount': action.result.amount,
                    'description': action.result.description,
                    'selectCategory': action.result.selectCategory,
                    'date': action.result.date,
                    'colorCode': action.result.colorCode,
                    'IconCode': action.result.IconCode,
                    'IconName': action.result.IconName,
                    'walletId': action.result.walletId,
                    'transectionid': action.result.transectionid 
                }
                AsyncStorage.setItem("transection@Data", JSON.stringify(result)).then(() => {
                    
                    ToastAndroid.show('Data save successfully', ToastAndroid.SHORT);
                    action.nav.navigate('WALLET');
                });

            } else{
                
                
                if(data.length == undefined){

                        result.push(data)

                        let action_result = {
                             'amount': action.result.amount,
                             'description': action.result.description,
                             'selectCategory': action.result.selectCategory,
                             'date': action.result.date,
                             'colorCode': action.result.colorCode,
                             'IconCode': action.result.IconCode,
                             'IconName': action.result.IconName,
                             'walletId': action.result.walletId,
                             'transectionid': action.result.transectionid
                        }
                         
                        result.push(action_result)
                }else{
                        
                        result = data;
                    
                        let action_result = {
                             'amount': action.result.amount,
                             'description': action.result.description,
                             'selectCategory': action.result.selectCategory,
                             'date': action.result.date,
                             'colorCode': action.result.colorCode,
                             'IconCode': action.result.IconCode,
                             'IconName': action.result.IconName,
                             'walletId': action.result.walletId,
                             'transectionid': action.result.transectionid
                         }
                         
                        result.push(action_result)
                }
                
                
                if(result){

                                
                    AsyncStorage.setItem("transection@Data", JSON.stringify(result)).then(() => {
                        
                        ToastAndroid.show('Data save successfully', ToastAndroid.SHORT);
                        action.nav.navigate('WALLET');
                        
                    });

                }else{
                    console.log("no data in our result check: saga_actions/All_Data_Transections")
                }
            
            }

        })

    } catch (error){
        console.log('async save prlm', error)
    }
}

export const addTransections = function* (action){
    yield call(UpdateBalance, action.result.walletId, action.result.amount);
    yield call(createNewTransection, action);
}