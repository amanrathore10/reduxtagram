import posts from './posts'
import comments from './comments'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;