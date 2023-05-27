import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromWishlist } from "../../actions/wishlistActions";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { wishlistItems } = useSelector((state) => state.wishlist);

  const removeWishlistItemHandler = (id) => {
    dispatch(removeItemFromWishlist(id));
  };

  return (
    <Fragment>
      <h2 className="mt-5">
        Your Wishlist: <b>{wishlistItems.length} items</b>
      </h2>

      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8">
          {wishlistItems.length === 0 ? (
            <h4 className="mt-5">Your Wishlist is Empty</h4>
          ) : (
            <Fragment>
              {wishlistItems.map((item) => (
                <Fragment key={item.product}>
                  <hr />

                  <div className="wishlist-item">
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="col-5 col-lg-3">
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="wishlist_item_price">${item.price}</p>
                      </div>

                      <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i
                          id="delete_wishlist_item"
                          className="fa fa-trash btn btn-danger"
                          onClick={() =>
                            removeWishlistItemHandler(item.product)
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Wishlist;
