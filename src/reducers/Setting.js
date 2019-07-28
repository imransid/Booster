// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
    sync : null,
    eventnotification : true,
    alert: null,
    loading: false
}


export default (state = initialState, action) => {
    switch (action.type){
        case actionType.LOAD_SETTING:
            return ({
                ...state,
                sync : action.sync,
                eventnotification: action.eventnotification,
                alert: action.alert
            })
        default:
            return state;
    }
}