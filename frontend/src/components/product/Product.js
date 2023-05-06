import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img
            alt=""
            class="card-img-top mx-auto"
            src={product.images[0].url}
          />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h5>
            <div class="ratings mt-auto">
              <div class="rating-outer">
                <div
                  class="rating-inner"
                  style={{ width: `${(product.ratings / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
            </div>
            <p class="card-text">{product.price}</p>
            <Link
              to={`/product/${product._id}`}
              id="view_btn"
              class="btn btn-block"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">
                Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam
                1080p HD Indoor Wireless Smart Home Camera
              </a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">$965.67</p>
            <a href="#" id="view_btn" class="btn btn-block">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">Fujifilm Instax Mini Instant Film Twin Pack (White)</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">$125.57</p>
            <a href="#" id="view_btn" class="btn btn-block">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">AmazonBasics High-Speed HDMI Cable</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">$75.56</p>

            <a type="button" href="#" id="view_btn" class="btn btn-block">
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-3 my-3">
        <div class="card p-3 rounded">
          <img class="card-img-top mx-auto" src="" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">
              <a href="">AmazonBasics High-Speed HDMI Cable, 6 Feet</a>
            </h5>
            <div class="ratings mt-auto">
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-half-o"></i>
              <i class="fa fa-star-o"></i>
              <span id="no_of_reviews">(5 Reviews)</span>
            </div>
            <p class="card-text">$75.56</p>
            <a href="#" id="view_btn" class="btn btn-block">
              View Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
