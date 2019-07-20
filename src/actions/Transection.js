import actionType from '../constant/constant';


export function add_new_transection(data, nav){
    return {
        type: actionType.ADD_TRANSECTION,
        result: data,
        nav: nav
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