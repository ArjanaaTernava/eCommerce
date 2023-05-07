import React, { Fragment,useState, useEffect } from "react";
import Pagination from 'react-js-pagination';

import MetaData from "./layout/MetaData";
import Product from "./product/Product";
import Loader from "./layout/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import { useAlert } from 'react-alert';

const Home = () => {

  const [currentPage, setCurrentpage] = useState(1)

  const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {

    if(error){
     return alert.error(error)
    }

    dispatch(getProducts(currentPage));

  }, [alert, dispatch, error,currentPage])

  function setCurrentPageNo(pageNumber)
  {
    setCurrentPage(pageNumber)
  }

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
                  
          {resPerPage <= productsCount && (
            <div className="d-flex justify-content-center mt-5">
            <Pagination 
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount = {productsCount}
              onChange={setCurrentPageNo}
              nextPageText={'Next'}
              previousPageText = {'Prev'}
              firstPageText={'First'}
              lastPageText={'Last'}
              itemsClass="page-item"
              linkClass="page-link" 
            />  
          </div>
          )}

          
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
