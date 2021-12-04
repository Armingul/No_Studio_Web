import React, { useEffect } from 'react';
import Product from '../components/Product';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const {loading, error, products} = productsList;


  //effect es otro hook despues de renderizar el componente esta funcion
  //utiliza una funcion y un array
  //despues de renderizar el componente esta funcion se ejecuta solo una vez
  useEffect(()=>{
    dispatch(listProducts());
  }, []);

  return (
    <div>
      {loading ? (
      <LoadingBox ></LoadingBox>
      ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      )}
        </div>
  );
}
