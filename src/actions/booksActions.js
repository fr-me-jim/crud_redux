import {
    ADD_BOOK,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL
} from '../types';

import axiosClient from '../config/axios'

//Main Function - add new book
export function addNewBookAction (book) {
    return (dispatch) => {
        dispatch( newBook() );

        //insert into api
        axiosClient.post('/books', book)
            .then( response => {
                if ( response.status === 201 ) {
                    //if all good -> insert it
                    dispatch( newBookSuccess(book) );
                }
            })
            .catch( error => {
                const { status } = error.response;
                if ( status === 404 || status === 403 || status === 400 ) {
                    //report error
                    dispatch( newBookFail() );
                }
            });

    }
}

export const newBook = () => ({
    type: ADD_BOOK
});

export const newBookSuccess = product => ({
    type: ADD_BOOK_SUCCESS,
    payload: product
});

export const newBookFail = () => ({
    type: ADD_BOOK_FAIL
});