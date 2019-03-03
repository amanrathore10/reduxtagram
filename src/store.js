import { createStore, compose} from 'redux';

import { createBrowserHistory } from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import rootReducer from './reducers/index' ;
import posts from './data/posts';
import comments from './data/comments';

console.log(comments);
const defaultState = {
    posts,
    comments
};

const store = createStore(rootReducer, defaultState);

export default store;