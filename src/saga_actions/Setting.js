import { takeEvery, select, call, put } from 'redux-saga/effects';
import { AsyncStorage, ToastAndroid } from "react-native";
import actionType from '../constant/constant';
import { CloudService } from "../cloud/firebase_crud";
async function RetrieveSetting(email, status, name){
    try{
        const data = await AsyncStorage.getItem('setting@Data');
        let result;
        if(data !== null){
            let data_load = JSON.parse(data);
            
            status == true ?
            result = { 
                'sync': data_load.sync,
                'eventnotification': data_load.eventnotification,
                'alert': data_load.alert,
                'email': email,
                'name' : name
            }:
            result = { 
                'sync': data_load.sync,
                'eventnotification': data_load.eventnotification,
                'alert': data_load.alert,
                'email': data_load.email,
                'name' : data_load.name
            }
        
        }else{
            status == true ? 
            result = {
                'sync': false,
                'eventnotification': true,
                'alert': true,
                'email': email,
                'name' : name
            } :
            result = data_load
        }
            if(status == true){
                AsyncStorage.setItem("setting@Data", JSON.stringify(result)).then(() => {

                });
            }

        return result;

    } catch (error){
        console.log('async retrive prlm', error)
    }
}

async function UpdateLoginAsync(){

        try {
            console.log('success')
            AsyncStorage.multiSet([
            ["LoginStatus", "1"],
            ["Token", '0'],
            ["RefreshToken", '0'],
          ]).then((values) => {
            // console.log('Then: ',values);
          });
       
        } catch (error) {
          console.log('AsyncStorage error during token store:', error);
        }
}

export const all_Setting = function* (action){
    var retive_data;
    if(action.status == true){
        retive_data = yield call(RetrieveSetting, action.email, action.status, action.name)
        const UpdateAsync = yield call(UpdateLoginAsync)
    }else{
        retive_data = yield call(RetrieveSetting, action.email, action.status, action.name)
    }
    yield put({ type: actionType.LOAD_SETTING, sync: retive_data.sync, name: retive_data.name, eventnotification: retive_data.eventnotification, alert: retive_data.alert, email: retive_data.email })
        
}

export const insertdata = function* (action){
    CloudService(a='123')
}