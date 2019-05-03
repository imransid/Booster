import { takeEvery, select, call, put } from 'redux-saga/effects';
import actionType from '../constant/constant';


const fetchuser = function* (action){
    console.log('work');
}


const rootSaga = function* (){
    yield takeEvery(actionType.USER, fetchuser )
}

export default rootSaga;