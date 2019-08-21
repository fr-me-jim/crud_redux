import React from 'react';

const NewProduct = () => {
    return (  
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Add New Book</h2>
                        <form>
                            <div className="form-group">
                                <label>Book's Name</label>
                                <input 
                                    type="text" 
                                    className="form-control text-white" 
                                    placeholder="Book's Name" 
                                />
                            </div>

                            <div className="form-group">
                                <label>Book's price</label>
                                <input 
                                    type="text" 
                                    className="form-control text-white" 
                                    placeholder="Book's price" 
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
 
export default NewProduct;