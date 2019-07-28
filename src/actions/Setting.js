import actionType from '../constant/constant';


export function add_new_transection(data, nav, ctype, Card_Type){
    return {
        type: actionType.ADD_TRANSECTION,
        result: data,
        nav: nav,
        category: ctype,
        Card_Type: Card_Type
    }
}

export function init_setting(){
    return {
        type: actionType.INITIAL_SETTING
    }
}