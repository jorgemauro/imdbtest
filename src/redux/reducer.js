import {combineReducers} from 'redux';
import movies from './reducers/movies';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    movies,
    router: routerReducer
});