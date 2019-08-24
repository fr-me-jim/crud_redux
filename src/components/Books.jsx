import React, { Fragment, useEffect } from 'react';

//components
import Book from './Book';

//actions
import { useDispatch, useSelector } from 'react-redux';
import { getBooksAction } from '../actions/booksActions';


const Books = () => {

    //dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        //get products on component mounted
        const loadBooks = () => dispatch( getBooksAction() ); 

        loadBooks();
    }, []);

    // get the state
    const loading = useSelector( state => state.books.loading );
    const error = useSelector( state => state.books.error );
    const { books } = useSelector( state => state.books );

    return (  
        <Fragment>
            <h2 className="text-center text-primary my-5">Books List</h2>

            <table className="table table-striped">
                <thead className="bg-dark table-dark">
                    <tr align="center">
                        <th scope="col" className="text-light" >Name</th>
                        <th scope="col" className="text-light" >Price</th>
                        <th scope="col" className="text-light" >Actions</th>
                    </tr>   
                </thead>
                <tbody>
                    { books.map( book => (
                        <Book
                            key={book.id}
                            book={book}
                        />
                    ) ) }
                </tbody>
            </table>
            { error ? 
                <div className="alert alert-danger font-weight-bold text-center mt-4">
                    Something went wrong!
                </div>
                : null
            }
            { loading ? 'Loading...' : null }
        </Fragment>
    );
}
 
export default Books;