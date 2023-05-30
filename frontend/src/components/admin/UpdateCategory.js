import React, { Fragment, useState, useEffect } from "react";

import MetaData from "../layout/MetaData";
import Sidebar from "./Sidebar";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  getCategoryDetails,
  updateCategory,
} from "../../actions/categoryActions";
import { UPDATE_CATEGORY_RESET } from "../../constants/categoryConstants";

const UpdateCategory = ({ match, history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, category } = useSelector((state) => state.getCategory);
  const [name, setName] = useState(category.name);
  const { error: updateError, isUpdated } = useSelector(
    (state) => state.category
  );

  const categoryId = match.params.id;

  useEffect(() => {
    if (category && category._id !== categoryId) {
      dispatch(getCategoryDetails(categoryId));
    } else {
      setName(category?.name);
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
      history.push("/admin/categories");
      alert.success("Category updated successfully");
      dispatch({ type: UPDATE_CATEGORY_RESET });
    }
  }, [
    dispatch,
    alert,
    error,
    isUpdated,
    history,
    updateError,
    category,
    categoryId,
  ]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);

    dispatch(updateCategory(category._id, formData));
  };

  return (
    <Fragment>
      <MetaData title={"Add Categories"} />
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
                    <label htmlFor="categoryName_field">
                      Enter Category Name
                    </label>
                    <input
                      type="text"
                      id="categoryName_field"
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
export default UpdateCategory;
