import React, { useEffect } from 'react';

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

    return (  
        <React.Fragment>
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

            { loading ? 'Loading...' : null }
        </React.Fragment>
    );
}
 
export default Books;