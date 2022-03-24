import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    return (
        <div className='col'>
            <div className='card p-3'>
                <img className='rounded mx-auto d-block my-4 img-size' src={product.image} alt="" />
                <h4 className='text-wrap'>{product.title}</h4>
                <div className="d-flex justify-content-around mt-5">
                    <button className="btn btn-success">
                        Addd to Cart
                    </button>
                    <button className="btn btn-danger">Delete</button>

                    <button className="btn btn-primary">Details</button>
                </div>
            </div>

        </div>
    );
};

export default Product;