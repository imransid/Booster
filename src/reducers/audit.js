// import actionType from '../constant/constant';
import {
    USER
} from '../constant/constant';

// import usertest from '../actions/audit'

const initialState = {
    userdata : 0
}

export default (state = initialState, action) => {
    switch (action.type){
        case USER:
            return ({
                ...state,
                userdata : action.result
            })
        default:
            return state;
    }
}
