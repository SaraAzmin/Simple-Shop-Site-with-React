import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    //fetching data from fakestore api
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    console.log(products)
    return (
        <div className='row mt-5 p-5 g-5 row-cols-lg-3'>
            {
                products.map(product => <Product product={product} key={product.id}></Product>)
            }
        </div>
    );
};

export default AllProducts;