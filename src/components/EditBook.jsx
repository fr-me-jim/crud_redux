import React, { useEffect, useRef } from 'react';

//actions
import { useDispatch, useSelector } from 'react-redux';
import { getEditBookAction, editBookAction } from '../actions/booksActions';

const EditBook = ({ match }) => {

    // refs
    const nameRef = useRef('');
    const priceRef = useRef('');

    //dispatch
    const dispatch = useDispatch();
    const editBook = book => dispatch( editBookAction(book) );

    //id
    const { id } = match.params;

    useEffect(() => {
        dispatch( getEditBookAction(id) );
        
    }, [ dispatch, id ]);

    //get state
    const book = useSelector( state => state.books.book );
    const { error } = useSelector( state => state.books );

    //when loading
    if(!book) return 'Loading..';

    //on submit, set changes
    const handleSubmit = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const price = priceRef.current.value;

        // validate form 

        // if all good:

        // save changes
        editBook({
            name,
            price
        });

        // redirect

    }

    return (  
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center text-primary">Edit Book</h2>

                        { error ? 
                            <div className="alert alert-danger font-weight-bold text-center mt-4">
                                Something went wrong!
                            </div>
                            : null
                        }

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    className="form-control text-dark" 
                                    placeholder="Title"
                                    defaultValue={book.name}
                                    ref={nameRef}
                                />
                            </div>
                            <div className="form-group">
                                <label>Book's Price</label>
                                <input 
                                    type="text" 
                                    className="form-control text-dark" 
                                    placeholder="Price" 
                                    defaultValue={book.price}
                                    ref={priceRef}
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-success font-weight-bold text-uppercase d-block w-100"
                            
                            >Save Changes</button>
                        </form>
 
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditBook;