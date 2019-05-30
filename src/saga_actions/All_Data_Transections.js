import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage } from "react-native";


async function retrieveTransection(){
    try{
        const data = await AsyncStorage.getItem('transection');

        if(data !== null){
            console.log("Data is ", data)
        }else{
            return null
        }
    } catch (error){
        console.log('async prlm', error)
    }
}

export const all_Transection = function* (action){
    
    const retive_data = yield call(retrieveTransection);
    
    // yield put({})


}