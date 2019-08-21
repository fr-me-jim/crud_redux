import {
    ADD_BOOK,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL
} from '../types';

//reducer's state
const initialState = {
    books: [],
    error: null,
    loading: false
}
    
export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                error: null
            }
        
        case ADD_BOOK_SUCCESS:
            return {
                ...state,
                error: null,
                books: [...state.books, action.payload]
            }

        case ADD_BOOK_FAIL:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
};