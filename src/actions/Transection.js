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

export function letast_transection(data){
    return {
        type: actionType.TRANSECTION,
        walletId: data
    }
}

export function delete_transection(data){
    return {
        type: actionType.DELETE_TRANSECTION,
        data: data
    }
}

export function walletRefresher(){
    return {
        type: actionType.WALLET_REFRESH
    }
}