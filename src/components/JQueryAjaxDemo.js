import { useState, useEffect } from "react";
import $ from "jquery";
import { useFormik } from "formik";

export default function JQueryAjaxDemo() {
  const [users, setUsers] = useState([]);
  const [userError, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      UserId: "",
      UserName: "",
      Password: "",
      Age: 0,
      Mobile: "",
      Subscribed: false,
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      $.ajax({
        method: "POST",
        url: "http://localhost:4000/registeruser",
        data: values,
      });
      alert("User Registered");
    },
  });

  useEffect(() => {
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/getusers",
      success: function (response) {
        setUsers(response);
      },
    });
  }, []);

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserId == e.target.value) {
        setError("User Id already exists");
        break;
      } else {
        setError("User Id Available");
      }
    }
  }
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
              onKeyUp={VerifyUserId}
            />
          </dd>
          <dd className="text-danger">{userError}</dd>
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
