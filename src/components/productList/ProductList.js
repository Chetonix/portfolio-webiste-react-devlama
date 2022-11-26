import React from 'react';
import "./productList.css";
import {products} from "../../../src/data";
import Product from '../product/Product';

function ProductList() {
  return (
    <div className='pl'>
        <div className='product-title'>
            <h1 className='p-heading'>Create & inspire. It's Lama</h1>
            <p className="p-desc">Lama is a creative portfolio that your work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more awaits inside.</p>
        </div>
        <div className="pl-list">
            {products.map(product=> {
                const {id, img, link} = product;
                <Product key={id} {...product} />
            })}
        </div>
    </div>
  )
}

export default ProductList