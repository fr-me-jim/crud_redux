import React, { Fragment, useEffect } from 'react';

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

    return (  
        <Fragment>
            <h2 className="text-center my-5">Books List</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr align="center">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>   
                </thead>
                <tbody>

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