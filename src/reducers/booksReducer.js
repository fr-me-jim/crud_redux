import {
    ADD_BOOK,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL,
    DOWNLOAD_BOOKS,
    DOWNLOAD_BOOKS_SUCCESS,
    DOWNLOAD_BOOKS_FAIL
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

        case DOWNLOAD_BOOKS:
            return {
                ...state,
                loading: true
            }

        case DOWNLOAD_BOOKS_SUCCESS:
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: false
            }

        case DOWNLOAD_BOOKS_FAIL:
            return {
                ...state,
                books: [],
                error: true,
                loading: false
            }

        default:
            return state;
    }
};