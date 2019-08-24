import React, { useEffect } from 'react';

//actions
import { useDispatch, useSelector } from 'react-redux';
import { editBookAction } from '../actions/booksActions';

const EditBook = ({ match }) => {

    //dispatch
    const dispatch = useDispatch();

    //id
    const { id } = match.params;

    useEffect(() => {
        dispatch( editBookAction(id) );
        
    }, [ dispatch, id ]);

    //get state
    const book = useSelector( state => state.books.book );
    const { error } = useSelector( state => state.books );

    //when loading
    if(!book) return 'Loading..';

    return (  
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Edit Book</h2>

                        { error ? 
                            <div className="alert alert-danger font-weight-bold text-center mt-4">
                                Something went wrong!
                            </div>
                            : null
                        }

                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    className="form-control text-dark" 
                                    placeholder="Title"
                                    defaultValue={book.name}
                                />
                            </div>
                            <div className="form-group">
                                <label>Book's Price</label>
                                <input 
                                    type="text" 
                                    className="form-control text-dark" 
                                    placeholder="Price" 
                                    defaultValue={book.price}
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