import { combineReducers } from 'redux';

//reducers
import booksReducer from './booksReducer'

export default combineReducers ({
    books: booksReducer
});