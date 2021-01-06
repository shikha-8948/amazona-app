import React, { useEffect } from 'react';
// import data from '../data';
import axios from 'axios'
import Product from '../components/Product'
import { useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { Listproducts } from '../actions/ProductActions';
// import {Listproducts}
export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state)=> state.productList);
  const {loading, error,products} =productList;
  useEffect(() => {
    dispatch(Listproducts())
  }, [dispatch]);
  return (
    <div>
      {loading ? <LoadingBox></LoadingBox>
        : error ? <MessageBox varient="danger">{error}</MessageBox>
          : <div className="row center">
            {products.map(product =>
              <Product key={product._id} product={product}></Product>
            )}
          </div>
      }
    </div>

  )
}