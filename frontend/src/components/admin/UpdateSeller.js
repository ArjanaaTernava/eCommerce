import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getSellerDetails,
  updateSeller,
} from "../../actions/sellerActions";
import { UPDATE_SELLER_RESET } from "../../constants/sellerConstants";

const UpdateSeller = ({ match, history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, seller } = useSelector((state) => state.getSeller);
  const [name, setName] = useState(seller.name);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.seller
  );

  const sellerId = match.params.id;

  useEffect(() => {
    if (seller && seller._id !== sellerId) {
      dispatch(getSellerDetails(sellerId));
    } else {
      setName(seller?.name);
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (updateError) {
      alert.error(updateError);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      history.push("/admin/sellers");
      alert.success("seller updated successfully");
      dispatch({ type: UPDATE_SELLER_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    isUpdated,
    history,
    updateError,
    seller,
    sellerId,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);

    dispatch(updateSeller(seller._id, formData));
  };

  return (
    <Fragment>
      <MetaData title={"Add Sellers"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>

        <div className="col-12 col-md-10">
          <Fragment>
            <div className="row justify-content-center mt-5">
              <div className="col-5">
                <form onSubmit={submitHandler}>
                  <div className="form-group">
                    <label htmlFor="sellerName_field">
                      Enter Seller Name
                    </label>
                    <input
                      type="text"
                      id="sellerName_field"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <button
                    id="search_button"
                    type="submit"
                    className="btn btn-primary btn-block py-2"
                  >
                    UPDATE
                  </button>
                </form>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};
export default UpdateSeller;
