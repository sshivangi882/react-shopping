import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function IShopLogin() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [cookies, setCookie] = useCookies();

  const formik = useFormik({
    initialValues: {
      UserId: "",
      Password: "", // Correct this to match the input name
    },

    onSubmit: (values) => {
      let userFound = false;
      for (let user of users) {
        if (user.UserId === values.UserId && user.Password === values.Password) { // Case-sensitive match
          setCookie("userid", user.UserId);
          navigate("/dashboard");
          userFound = true;
          break;
        }
      }
      if (!userFound) {
        navigate("/errorPage");
      }
    },
  });

  useEffect(() => {
    axios.get("http://localhost:4000/getusers").then((response) => {
      setUsers(response.data);
    });
  }, []); // Add dependency array to avoid infinite API calls

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={formik.handleSubmit}>
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
              name="Password" // Match case with initialValues
              value={formik.values.Password}
              onChange={formik.handleChange}
              type="password"
            />
          </dd>
        </dl>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br></br>
        <Link to="/register">New User? Register</Link>
        <br></br>
      </form>
    </div>
  );
}
