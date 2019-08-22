import React, { useState } from 'react';

//actions
import { useDispatch } from 'react-redux'
import { addNewBookAction } from '../actions/booksActions';
import { validateFormAction, validationError, validationSuccess } from '../actions/validationActions';

const NewBook = () => {

    //state
    const [ name, setName ] = useState('');
    const [ price, setPrice ] = useState('');

    //create new Product
    const dispatch = useDispatch();
    const addProduct = book => dispatch( addNewBookAction(book) );
    const validateForm = () => dispatch( validateFormAction() );
    const successForm = () => dispatch( validationSuccess() );
    const errorForm = () => dispatch( validationError() );

    //Add new product
    const handleSubmit = e => {
        e.preventDefault();

        validateForm();

        //validate form
        if ( name.trim() === '' || price.trim() === '' ) {
            errorForm();
            return;
        }

        //if all good : 
        successForm();

        addProduct({
            name,
            price
        });

        //create new book

        //redirect

    }
    
    return (  
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold text-dark ">Add New Book</h2>
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-group">
                                <label>Book's Name</label>
                                <input 
                                    type="text" 
                                    className="form-control text-white" 
                                    placeholder="Book's Name" 
                                    value={name}
                                    onChange={ e => setName( e.target.value ) }
                                />
                            </div>

                            <div className="form-group">
                                <label>Book's price</label>
                                <input 
                                    type="text" 
                                    className="form-control text-white" 
                                    placeholder="Book's price"
                                    value={price} 
                                    onChange={ e => setPrice( e.target.value ) }
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            > Add </button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewBook;