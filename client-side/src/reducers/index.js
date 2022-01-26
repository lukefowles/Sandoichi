import { combineReducers } from 'redux';

import sandwiches from './sandwiches';

export default combineReducers({
    sandwiches,
    // if key and value are the same, just write it down once. e.g. sandwiches,
    // But normally would be something like this: sandwiches, state
});