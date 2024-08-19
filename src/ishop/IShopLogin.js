import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { response } from "express";
import { useCookies } from "react-cookie";

export default function IShopLogin() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [cookies, setCookie] = useCookies();

  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "",
    },
    onSubmit: (values) => {
      for (var user of users) {
        if (user.UserId == values.UserId && user.Password == values.Password) {
            setCookie("userid",user.UserId);
          navigate("/dashboard");
          break;
        } else {
          navigate("/errorPage");
        }
      }
    },
  });

  useEffect(() => {
    axios.get("http://localhost:4000/getusers").then((response) => {
      setUsers(response.data);
    });
  });
  return (
    <div>
      <h2>User Login</h2>
      <form>
        <dl>
          <dt>User Id</dt>
          <dd>
            <input
              name="UserId"
              value={formik.values.UserId}
              onChange={formik.handleChange}
              type="text"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              name="password"
            //   value={formik.values.Password}
              onChange={formik.handleChange}
              type="password"
            />
          </dd>
        </dl>
        <button onSubmit={formik.handleSubmit} className="btn btn-primary">
          Login
        </button>
        <br></br>
        <Link to="/register">New User? Register</Link>
        <br></br>
      </form>
    </div>
  );
}
