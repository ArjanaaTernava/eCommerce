import React, { Fragment, useEffect } from "react";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from 'react-alert';

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    if(error){
     return alert.error(error)
    }

    dispatch(getProducts());

  }, [alert, dispatch, error]);

  return (
    <Fragment>
     {/* Ternary operator */}
      {loading ? (
       <Loader/>
      ) : (
        <Fragment>
          <MetaData title={"Shop smart, shop online"} />
          <h1 id="products_heading">Latest Products</h1>

          <section id="products" class="container mt-5">
            <div class="row">
              {products &&
                products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
