import React from 'react';

const Products = () => {
    return (  
        <React.Fragment>
            <h2 className="text-center my-5">Products List</h2>

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
        </React.Fragment>
    );
}
 
export default Products;