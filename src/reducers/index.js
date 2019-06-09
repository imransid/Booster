import { combineReducers } from 'redux';

import audit from './audit';
import CONVERTER from './Converter';
import TRASECTION from "./Transection";

export default combineReducers({
    audit,
    CONVERTER,
    TRASECTION
});