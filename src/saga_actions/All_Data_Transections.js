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
    yield put({ type: actionType.TRANSECTION_RESULT, result: retive_data, result_wallet: retive_data_wallet, wallet_detaits : retive_wallet_details, wallet_id: action.walletId })
    
}

const UpdateBalance = function*(walletid, amounT, CType, Card_Type){
    try{
        AsyncStorage.getItem('wallet@Card').then(res => {
            let data = JSON.parse(res);
            let result = [];
            let avamount;
            let UpdatedNewBalance;
            if(data.length == undefined){
                CType == 'Bill' ? avamount = parseInt(data.avalible_balance) + parseInt(amounT) : avamount = parseInt(data.avalible_balance) - parseInt(amounT);
                if((CType == 'Bill') && (Card_Type == 'DABIT') && (avamount > parseInt(data.balance))){
                    UpdatedNewBalance = avamount;
                }else{
                    UpdatedNewBalance = parseInt(data.balance);
                }

                result = {
                    'card_holder_name': data.card_holder_name,
                    'bank_code': data.bank_code,
                    'balance': UpdatedNewBalance,
                    'avalible_balance': avamount,
                    'balance_type': data.balance_type,
                    'wallet_add_date': data.wallet_add_date,
                    'card_num': data.card_num,
                    'wallet_id': data.wallet_id,
                    'syncStatus': data.syncStatus
                }
            } else{
                let avamount;

                let objIndex = data.findIndex(obj => obj.wallet_id === walletid)
                
                CType == 'Bill' ? avamount = parseInt(data[objIndex].avalible_balance) + parseInt(amounT) : avamount = parseInt(data[objIndex].avalible_balance) - parseInt(amounT);
                
                if((CType == 'Bill') && (Card_Type == 'DABIT') && (avamount > parseInt(data[objIndex].balance))){
                        UpdatedNewBalance = avamount;
                }else{
                        UpdatedNewBalance = parseInt(data[objIndex].balance);
                }
                
                let updateObj = { ...data[objIndex], avalible_balance : avamount, balance: UpdatedNewBalance }
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


const DeleteTransections = function*(props){
    try{

        AsyncStorage.getItem('transection@Data').then(res => {
            let data = JSON.parse(res);
            let result = [];
            let update_walletId;
            if(data.length == undefined){
                result = []

                update_walletId = data.walletId

            }else{
                result = data.filter((e) => e.transectionid !== props.data.transectionid )
                let objIndex = data.findIndex(obj => obj.transectionid === props.data.transectionid)
                update_walletId = data[objIndex].walletId
            }

            if(update_walletId){
                AsyncStorage.getItem('wallet@Card').then(res => {
                    let data = JSON.parse(res);
                    let result = []

                    if(data.length == undefined){
                        result = data
                        result.avalible_balance = parseInt(data.avalible_balance) + parseInt(props.data.value)
        
                    }else{
                        let objIndex = data.findIndex(obj => obj.wallet_id === update_walletId)
                        let updateObj = { ...data[objIndex],
                            avalible_balance: parseInt(data[objIndex].avalible_balance) + parseInt(props.data.value),
                            balance: data[objIndex].balance,
                            balance_type: data[objIndex].balance_type,
                            bank_code: data[objIndex].bank_code,
                            card_holder_name: data[objIndex].card_holder_name,
                            card_num: data[objIndex].card_num,
                            wallet_add_date: data[objIndex].wallet_add_date,
                            wallet_id: data[objIndex].wallet_id,
                            syncStatus: data[objIndex].syncStatus
                        }
                        
                        result = [
                            ...data.slice(0, objIndex), updateObj, ...data.slice(objIndex + 1)
                        ];                     
                    }

                    if(result){
                        AsyncStorage.setItem("wallet@Card", JSON.stringify(result)).then(() => {
                            ///wallet avalible blsnce updated
                        });
                    }
                    
                })
            }

            if(result){

                                
                AsyncStorage.setItem("transection@Data", JSON.stringify(result)).then(() => {
                    
                    ToastAndroid.show('Data save successfully', ToastAndroid.SHORT);
                    props.data.navigation.navigate('WALLET');
                    
                });

            }else{
                console.log("no data in our result check: saga_actions/All_Data_Transections")
            }
            
        })
    }
    catch (error){
        console.log('async sasave    v saveve prlm', error)
    }

}

async function createNewTransection(action){
    try{
        await AsyncStorage.getItem('transection@Data').then(res => {
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
                    'transectionid': action.result.transectionid,
                    'syncStatus': false 
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
                             'transectionid': action.result.transectionid,
                             'syncStatus': false
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
                             'transectionid': action.result.transectionid,
                             'syncStatus': false
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
    yield call(UpdateBalance, action.result.walletId, action.result.amount, action.category, action.Card_Type);
    const result = yield call(createNewTransection, action);
}

export const deleteTransection = function* (action){
   const del_tranSecTions = yield call(DeleteTransections, action);
}
