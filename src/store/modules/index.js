import { combineReducers } from 'redux';

import uiReducer from './ui/reducer';
import bookReducer from './books/reducer';

const rootReducer = combineReducers({
    book: bookReducer,
    ui: uiReducer,
});

export default rootReducer;
