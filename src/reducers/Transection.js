import actionType from "../constant/constant";

const initialState = {
    all_transection : null,
    lodder : true
}

export default (state = initialState, action) => {

    switch (action.type){
        
        case actionType.TRANSECTION_RESULT:
            return ({        
                ...state,
                all_transection : action.result,
                all_walllet_card : action.result_wallet,
                wallet_detaits: action.wallet_detaits,
                lodder : false
            })

        case actionType.ADD_TRANSECTION:
            return ({        
                ...state,
                lodder : true
            })

        default:
            return state;
    }
}
