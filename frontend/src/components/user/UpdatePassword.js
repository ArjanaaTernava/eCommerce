import React, { Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import MetaData from "../layout/MetaData";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePassword,
  clearErrors,
} from "../../actions/userActions";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";

const UpdatePassword = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { error, isUpdated, loading } = useSelector(
    (state) => state.user
  );

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("Old Password is required"),
    password: Yup.string()
      .required("New Password is required")
      .min(6, "New Password must be at least 6 characters long"),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updatePassword(values));
    },
  });

  const { values, touched, errors, handleChange, handleSubmit } =
    formik;

  React.useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Password updated successfully");

      history.push("/me");

      dispatch({
        type: UPDATE_PASSWORD_RESET,
      });
    }
  }, [dispatch, alert, error, history, isUpdated]);

  return (
    <Fragment>
      <MetaData title={"Change Password"} />

      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg" onSubmit={handleSubmit}>
            <h1 className="mt-2 mb-5">Update Password</h1>
            <div className="form-group">
              <label htmlFor="old_password_field">Old Password</label>
              <input
                type="password"
                id="old_password_field"
                className={`form-control ${
                  touched.oldPassword && errors.oldPassword
                    ? "is-invalid"
                    : ""
                }`}
                name="oldPassword"
                value={values.oldPassword}
                onChange={handleChange}
              />
              {touched.oldPassword && errors.oldPassword && (
                <div className="invalid-feedback">
                  {errors.oldPassword}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="new_password_field">New Password</label>
              <input
                type="password"
                id="new_password_field"
                className={`form-control ${
                  touched.password && errors.password ? "is-invalid" : ""
                }`}
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {touched.password && errors.password && (
                <div className="invalid-feedback">
                  {errors.password}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn update-btn btn-block mt-4 mb-3"
              disabled={loading}
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePassword;
