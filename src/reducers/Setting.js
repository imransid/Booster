// LOAD_SETTING
import actionType from "../constant/constant";

const initialState = {
    sync : null,
    eventnotification : true,
    alert: null,
    loading: false,
    useremail: null,
    userpic: null,
    logstatus: '',
    loadedData: false
}


export default (state = initialState, action) => {
    switch (action.type){
        case actionType.LOAD_SETTING:
            return ({
                ...state,
                sync : action.sync,
                eventnotification: action.eventnotification,
                alert: action.alert,
                useremail: action.email,
                name: action.name,
                userpic: action.userpic,
                logstatus: action.logstatus,
                loadedData: action.loadedData
            })
        default:
            return state;
    }
}