import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
// import React from "react";

export default function IShopRegister() {
    let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Age: 0,
      Mobile: "",
      Subscribed: true,
    },

    onSubmit : values =>{
        axios.post("http://localhost:4000/registeruser", values)
        .then(response => {
            alert("User Registered");
            navigate("/login");
        })
        .catch(error => {
            alert("Error in registering user");
        })
    }
  });

  return (
    <div className="container-fluid">
      <h2>Register User</h2>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.UserId}
              name="UserId"
            //   onKeyUp={VerifyUserId}
            />
          </dd>
          {/* <dd className="text-danger">{userError}</dd> */}
          <dt>User Name</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.UserName}
              name="UserName"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              onChange={formik.handleChange}
              value={formik.values.Password}
              name="Password"
            />
          </dd>
          <dt>Age</dt>
          <dd>
            <input
              type="number"
              onChange={formik.handleChange}
              value={formik.values.Age}
              name="Age"
            />
          </dd>
          <dt>Mobile</dt>
          <dd>
            <input
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Mobile}
              name="Mobile"
            />
          </dd>
          <dt>Subscribe</dt>
          <dd className="form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={formik.handleChange}
              checked={formik.values.Subscribed}
              name="Subscribed"
            />{" "}
          </dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
}
