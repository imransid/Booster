import { combineReducers } from 'redux';

import audit from './audit';
import CONVERTER from './Converter';

export default combineReducers({
    audit,
    CONVERTER
});