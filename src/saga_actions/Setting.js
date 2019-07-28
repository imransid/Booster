import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from '../constant/constant';

async function RetrieveSetting(){
    try{
        const data = await AsyncStorage.getItem('setting@Data');
        let result;
        if(data !== null){
            let data_load = JSON.parse(data);
                
            result = data_load
        
        }else{
            result = {
                'sync': false,
                'eventnotification': true,
                'alert': true
            }
        }

        AsyncStorage.setItem("setting@Data", JSON.stringify(result)).then(() => {

        });

        return result;

    } catch (error){
        console.log('async retrive prlm', error)
    }
}

export const all_Setting = function* (action){
    const retive_data = yield call(RetrieveSetting)
    yield put({ type: actionType.LOAD_SETTING, sync: retive_data.sync,eventnotification: retive_data.eventnotification, alert: retive_data.alert })
        
}