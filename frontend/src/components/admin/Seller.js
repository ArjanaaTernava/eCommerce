import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  newSeller,
  clearErrors,
} from "../../actions/sellerActions";

const AddSeller = () => {
  const [name, setName] = useState("");

  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, success } = useSelector((state) => state.newSeller);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);

    dispatch(newSeller(formData));
  };

  console.log(submitHandler);
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
                      Enter Seller's Name
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
                    ADD
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

export default AddSeller;
