import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";

import { useAlert } from "react-alert";
import { getCategories, clearErrors } from "../../actions/categoryActions";
import { DELETE_CATEGORY_RESET } from "../../constants/categoryConstants";

const AllCategories = () => {
  const dispatch = useDispatch();
  const { loading, error, categories } = useSelector(
    (state) => state.getCategories
  );
  // const { error: deleteError, isDeleted } = useSelector(
  //   (state) => state.product
  // );

  useEffect(() => {
    dispatch(getCategories());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const setCategories = () => {
    const data = {
      columns: [
        {
          label: "ID",
          field: "id",
          sort: "asc",
        },
        {
          label: "Name",
          field: "name",
          sort: "asc",
        },
        {
          label: "Actions",
          field: "actions",
          sort: "asc",
        },
      ],
      rows: [],
    };

    categories.forEach((category) => {
      data.rows.push({
        id: category._id,
        name: category.name,
        actions: (
          <Fragment>
            {/* <Link
              to={`/admin/category/${category._id}`}
              className="btn btn-primary py-1 px-2"
            > */}
            <i className="fa fa-pencil"></i>
            {/* </Link> */}

            {/* <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deletecategoryHandler(category._id)}
            > */}
            <i className="fa fa-trash"></i>
            {/* </button> */}
          </Fragment>
        ),
      });
    });

    return data;
  };

  return (
    <Fragment>
      <MetaData title={"All Products"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Products</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setCategories()}
                className="px-3"
                bordered
                striped
                hover
              />
            )}
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default AllCategories;

{
  /* <div>
{categories && categories.length > 0 ? (
  categories.map((category) => (
    <div key={category._id}>{category.name}</div>
  ))
) : (
  <div>No categories found.</div>
)}
</div> */
}
