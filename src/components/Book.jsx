import React from 'react';

import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

//actions
import { useDispatch } from 'react-redux';
import { deleteBookAction } from '../actions/booksActions';

const Book = ({book}) => {

    //dispatch
    const dispatch = useDispatch();


    const handleClick = id => {

        //ask with sweetalert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )

                dispatch( deleteBookAction(id) );
            }   
          })

    }

    return (  
        <tr align="center" >
            <td className="text-dark" >
                {book.name}
            </td>
            <td>
                <span className="font-weight-bold text-dark">$ {book.price}</span>
            </td>
            <td className="actions" >
                <Link 
                    to={`/books/edit/${book.id}`} 
                    className="btn btn-primary mr-2"    
                >Edit</Link>

                <button 
                    className="btn btn-danger"
                    onClick={ () => handleClick(book.id) }
                >Delete</button>
            </td>
        </tr>
    );
}
 
export default Book;