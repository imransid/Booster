import actionType from '../constant/constant';


export function usertest(data){
    return {
        type: actionType.USER,
        result: data
    }
}