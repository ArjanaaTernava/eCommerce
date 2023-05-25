import React, { Fragment, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { register, clearErrors } from "../../actions/userActions";

import MetaData from "../layout/MetaData";

const Register = ({ history }) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  );

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(30, "Name must not exceed 30 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // if (!values.avatar) {
    //   // Handle case when avatar file is not selected
    //   alert.error("Please select an avatar");
    //   setSubmitting(false);
    //   return;
    // }

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("avatar", image);

    console.log();

    dispatch(register(formData));

    setSubmitting(false);
  };

  React.useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isAuthenticated, error, history]);
  const [image, setImage] = useState();

  return (
    <Fragment>
      <MetaData title={"Register User"} />

      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              avatar: null,
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="shadow-lg">
                <h1 className="mb-3">Register</h1>

                <div className="form-group">
                  <label htmlFor="name_field">Name</label>
                  <Field
                    type="text"
                    id="name_field"
                    className="form-control"
                    name="name"
                  />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="form-group">
                  <label htmlFor="email_field">Email</label>
                  <Field
                    type="email"
                    id="email_field"
                    className="form-control"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password_field">Password</label>
                  <Field
                    type="password"
                    id="password_field"
                    className="form-control"
                    name="password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="avatar_upload">Avatar</label>
                  <div className="d-flex align-items-center">
                    <div>
                      <figure className="avatar mr-3 item-rtl">
                        <img
                          src={
                            image
                              ? URL.createObjectURL(image)
                              : "/images/default_avatar.jpg"
                          }
                          className="rounded-circle"
                          alt="Avatar Preview"
                        />
                      </figure>
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        name="avatar"
                        className="custom-file-input"
                        id="customFile"
                        accept="images/*"
                        multiple={false}
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        {image ? image.name : "Choose Avatar"}
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  id="register_button"
                  type="submit"
                  className="btn btn-block py-3"
                  disabled={isSubmitting || loading}
                >
                  REGISTER
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
