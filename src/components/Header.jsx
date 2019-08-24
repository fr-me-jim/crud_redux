import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (  
        <nav className="navbar navbar-expand-lg justify-content-between">
            <div className="container-fluid">
                <h1>
                    <Link to={'/'} className="text-light" >
                        CRUD -- React && Redux Hooks
                    </Link>
                </h1>

                <Link 
                    to={'/books/new'} 
                    className="btn btn-info new-post d-block d-md-inline-block" 
                >
                    &#43; Add Book 
                </Link>
            </div>
        </nav>
    );
}
 
export default Header;