import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions/categoryActions";
import Sidebar from "./Sidebar";

const AllCategories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.getCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
        <div className="col-12 col-md-2">
          <Sidebar />
        </div>
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <div key={category._id}>{category.name}</div>
        ))
      ) : (
        <div>No categories found.</div>
      )}
    </div>
  );
};

export default AllCategories;
