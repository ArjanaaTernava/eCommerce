import React, { Fragment, useEffect } from "react";

import MetaData from "./layout/MetaData";
import Product from "./product/Product";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
     {/* Ternary operator */}
      {loading ? (
        <h1>Loading...</h1>
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
