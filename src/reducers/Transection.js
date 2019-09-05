import actionType from "../constant/constant";

const initialState = {
    all_transection : '',
    lodder : true,
    wallet_id : '',
    sync: null
}

const SyncStatus = (transection) => {
    let sync;

    if(transection == null){
        sync = false
    }
    else{

        if(transection.length == undefined){
            sync = transection.syncStatus;
        }else{
            transection.map((e) => e.syncStatus == false ? sync = e.syncStatus : e);
            sync == false ? sync = false : sync = true;
        }
    }
    return sync;
}

const BalanceChk = (id, wallet) => {

    let result;
    
    if(wallet.length == undefined){
        result = wallet.avalible_balance;
     }else{
         wallet.map((e) => e.wallet_id == id ? result = e.avalible_balance : e);
     }

    return result;

}

export default (state = initialState, action) => {

    switch (action.type){
        
        case actionType.TRANSECTION_RESULT:
            return ({        
                ...state,
                all_transection : action.result,
                all_walllet_card : action.result_wallet,
                wallet_detaits: action.wallet_detaits,
                lodder : false,
                wallet_id : action.wallet_id,
                sync : SyncStatus(action.result),
                walletBlance : BalanceChk(action.wallet_id, action.wallet_detaits) 
            })

        case actionType.ADD_TRANSECTION:
            return ({        
                ...state,
                lodder : true
            })

        case actionType.DELETE_TRANSECTION:
            return ({        
                ...state,
                lodder : true
            })

        case actionType.ADD_WALLET_CARD_SUCCESSFULLY:
            return ({        
                ...state,
                lodder : true
            })
        
        case actionType.WALLET_REFRESH:
            return ({        
                ...state,
                lodder : true
            })

        default:
            return state;
    }
}
