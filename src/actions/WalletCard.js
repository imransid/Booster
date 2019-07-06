import actionType from '../constant/constant';


export function add_new_card(data, nav){
    return {
        type: actionType.ADD_WALLET_CARD,
        result: data,
        nav: nav
    }
}

export function letast_wallet(data){
    return {
        type: actionType.WALLET_CARD,
        result: data
    }
}