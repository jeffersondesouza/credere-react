import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import customerReducer from './customers/reducer';

const rootReducer = combineReducers({
    customer: customerReducer,
    ui: uiReducer,
});

export default rootReducer;
