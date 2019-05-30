import {
    TRANSECTION
} from '../constant/constant';

// import usertest from '../actions/audit'

const initialState = {
    convert_result : ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case CONVERT:
            return ({
                ...state,
                convert_result : action.result
            })
        default:
            return state;
    }
}
