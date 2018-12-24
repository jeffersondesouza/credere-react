import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import bookReducer from './books/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer,
    ui: uiReducer,
});

export default rootReducer;
