import actionType from "../constant/constant";

const initialState = {
    all_transection : null,
    lodder : true,
    wallet_id : '',
    sync: null
}

const SyncStatus = (transection) => {
    let sync;

    if(transection.length == undefined){
        sync = transection.syncStatus;
    }else{
        transection.map((e) => e.syncStatus == false ? sync = e.syncStatus : e);
        sync == false ? sync = false : sync = true;
    }
    return sync;
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
                sync : SyncStatus(action.result) 
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

        case actionType.ADD_WALLET_CARD:
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
