import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from '../constant/constant';

async function retrieveTransection(){
    try{
        const data = await AsyncStorage.getItem('transection@Data');

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

export const all_Transection = function* (action){
    
    const retive_data = yield call(retrieveTransection);

    yield put({ type: actionType.TRANSECTION_RESULT, result: retive_data })
    
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
                    'IconName': action.result.IconName
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
                             'IconName': action.result.IconName
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
                             'IconName': action.result.IconName
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
    const create_data = yield call(createNewTransection, action);
}