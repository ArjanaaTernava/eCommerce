import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { MDBDataTable } from "mdbreact";

import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader";

import { useAlert } from "react-alert";
import {
  getSellers,
  clearErrors,
  deleteSeller,
} from "../../actions/sellerActions";
import { DELETE_SELLER_RESET } from "../../constants/sellerConstants";

const AllSellers = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, sellers } = useSelector((state) => state.getSellers);
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.seller
  );

  useEffect(() => {
    dispatch(getSellers());

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Seller deleted successfully!");
      history.push("/admin/sellers");
      dispatch({ type: DELETE_SELLER_RESET });
    }
  }, [dispatch, error, deleteError, isDeleted, history, alert]);

  const setSellers = () => {
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

    sellers.forEach((seller) => {
      data.rows.push({
        id: seller._id,
        name: seller.name,
        actions: (
          <Fragment>
            <Link
              to={`/admin/seller/update/${seller._id}`}
              className="btn btn-primary py-1 px-2"
            >
              <i className="fa fa-pencil"></i>
            </Link>

            <button
              className="btn btn-danger py-1 px-2 ml-2"
              onClick={() => deleteCategoryHandler(seller._id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </Fragment>
        ),
      });
    });

    return data;
  };

  const deleteCategoryHandler = (id) => {
    dispatch(deleteSeller(id));
  };

  return (
    <Fragment>
      <MetaData title={"All Sellers"} />
      <div className="row">
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-10">
          <Fragment>
            <h1 className="my-5">All Sellers</h1>

            {loading ? (
              <Loader />
            ) : (
              <MDBDataTable
                data={setSellers()}
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

export default AllSellers;
