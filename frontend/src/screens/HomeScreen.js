import React, { useEffect } from 'react';
// import data from '../data';
import axios from 'axios'
import Product from '../components/Product'
import { useState } from 'react';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setProducts(data);
        setLoading(false);

      } catch (err) {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      }

    };
    fetchData();
  }, []);
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