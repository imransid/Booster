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

export const all_Wallet_Card = function* (action){
    
    const retive_data = yield call(retrieveWalletCard);

    //yield put({ type: actionType.TRANSECTION_RESULT, result: retive_data })
    
}

async function createNewWalletCard(action){
    try{
        AsyncStorage.getItem('wallet@Card').then(res => {
            let data = JSON.parse(res);
            let result = []
            if (data === null) {
                result = {
                    'card_holder_name': action.result.card_holder_name,
                    'bank_code': action.result.bank_code,
                    'balance': action.result.balance,
                    'avalible_balance': action.result.balance,
                    'balance_type': action.result.balance_type,
                    'wallet_add_date': action.result.wallet_add_date,
                    'card_num': action.result.card_num,
                    'wallet_id': action.result.wallet_id
                }
                
                AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
                    
                    ToastAndroid.show('Wallet Add successfully', ToastAndroid.SHORT);
                    
                });

            } else{
                
                
                if(data.length == undefined){

                    let action_result = {
                        'card_holder_name': action.result.card_holder_name,
                        'bank_code': action.result.bank_code,
                        'balance': action.result.balance,
                        'avalible_balance': action.result.balance,
                        'balance_type': action.result.balance_type,
                        'wallet_add_date': action.result.wallet_add_date,
                        'card_num': action.result.card_num,
                        'wallet_id': action.result.wallet_id
                    }

                    if(data.bank_code == "Initial Card"){
                        result = action_result;
                    }else {
                        result.push(data)
                        result.push(action_result)
                    }
                }else{
                        
                        result = data;
                    
                        let action_result = {
                            'card_holder_name': action.result.card_holder_name,
                            'bank_code': action.result.bank_code,
                            'balance': action.result.balance,
                            'avalible_balance': action.result.balance,
                            'balance_type': action.result.balance_type,
                            'wallet_add_date': action.result.wallet_add_date,
                            'card_num': action.result.card_num,
                            'wallet_id': action.result.wallet_id
                         }
                         
                        result.push(action_result)
                }
                
                
                if(result){

                    AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
                        
                        ToastAndroid.show('Wallet Add successfully', ToastAndroid.SHORT);
                        
                    });

                }else{
                    console.log("no data in our result check: saga_actions/All_Data_Wallet")
                }
                
            }

        })

    } catch (error){
        console.log('async save prlm', error)
    }
}



export const addWalletCard = function* (action){
    const create_data = yield call(createNewWalletCard, action);
    yield put({ type: actionType.ADD_WALLET_CARD_SUCCESSFULLY});
    action.nav.navigate('WALLET');
}