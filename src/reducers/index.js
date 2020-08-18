import { combineReducers } from 'redux'

import category from './category'
import textALL from './text-for-all'
import pageList from './page-list'

export default combineReducers({
    category,
    textALL,
    pageList
});
