import actionType from "../constant/constant";

const initialState = {
    all_transection : '',
    lodder : true,
    wallet_id : '',
    sync: null,
    refreshforsettingupdate: false
}

const SyncStatus = (transection, wallet) => {
    let sync;

    console.log('transection, wallet', transection, wallet)
    if(transection == null || transection.length == undefined || transection.length == 0){
   
        
        if( transection !== null && transection.IconCode !== undefined){
            transection.syncStatus == false ? sync = false : sync = true;
        }else{
            if(wallet.length == undefined){
                sync = wallet.syncStatus;
            }else{
                wallet.map((e) => e.syncStatus == false ? sync = e.syncStatus : e);
                sync == false ? sync = false : sync = true;
            }
        }        
    }
    else{

            transection.map((e) => e.syncStatus == false ? sync = e.syncStatus : e);
            sync == false ? sync = false : sync = true;
        
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
                refreshforsettingupdate: false,
                wallet_id : action.wallet_id,
                sync : SyncStatus(action.result, action.result_wallet),
                walletBlance : BalanceChk(action.wallet_id, action.wallet_detaits) 
            })

        case actionType.ADD_TRANSECTION:
            return ({        
                ...state,
                lodder : true,
                refreshforsettingupdate: false
            })

        case actionType.SYNC:
            return ({
                ...state,
                sync: true,
                refreshforsettingupdate: true,
                lodder : true
            })

        case actionType.DELETE_TRANSECTION:
            return ({        
                ...state,
                lodder : true,
                sync : false,
                refreshforsettingupdate: false,
            })

        case actionType.ADD_WALLET_CARD_SUCCESSFULLY:
            return ({        
                ...state,
                lodder : true,
                refreshforsettingupdate: false
            })
        
        case actionType.WALLET_REFRESH:
            return ({        
                ...state,
                lodder : true,
                refreshforsettingupdate: false
            })

        default:
            return state;
    }
}
