import actionType from '../constant/constant';


export function convert(data){
    return {
        type: actionType.CONVERTION_INIT,
        result: data
    }
}