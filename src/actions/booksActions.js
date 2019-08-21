import {
    ADD_BOOK,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_FAIL
} from '../types';

import axiosClient from '../config/axios'

//Main Function - add new book
export function addNewBook (book) {
    return (dispatch) => {
        dispatch( newBook() );

        //insert into api
        axiosClient.post('/books', book)
            .then( response => {
                //insert it
                dispatch( newBookSuccess(book) );
            })
            .catch( error => {
                console.log(error);
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