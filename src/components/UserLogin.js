import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCaptcha } from "../hooks/useCaptcha";
import $ from "jquery";

export function UserLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);
  const [userDetails, setUserDetails] = useState({
    UserName: "",
    Password: "",
  });
  const { code } = useCaptcha();
  const [users, setUsers] = useState([]);

  function handleUserName(e) {
    setUserDetails({
      UserName: e.target.value,
      Password: userDetails.Password,
    });
  }
  function handlePassword(e) {
    setUserDetails({
      UserName: userDetails.UserName,
      Password: e.target.value,
    });
  }
  function handleLogin() {
    // setCookie("username",userDetails.UserName,{path:"/", expires:new Date("2022-07-02")});
    // alert("Login Success..");
    for (var user of users) {
      if (
        user.UserId == userDetails.UserName &&
        user.Password == userDetails.Password
      ) {
        setCookie("username", userDetails.UserName, {
          path: "/",
          expires: new Date("2022-07-02"),
        });
        alert("Login Success..");
        break;
      } else {
        alert("Login Failed..");
      }
    }
  }
  function handleSignout() {
    removeCookie("username");
    alert("Signed out Successfully..");
  }
  useEffect(() => {
    $.ajax({
      method: "GET",
      url: "http://localhost:4000/getusers",
      success: function (response) {
        setUsers(response);
      },
    });
  }, []);

  return (
    <div className="container-fluid">
      <h2>User Login</h2>
      <dl>
        <dt>User Name</dt>
        <dd>
          <input onChange={handleUserName} type="text" />
        </dd>
        <dt>Password</dt>
        <dd>
          <input onChange={handlePassword} type="password" />
        </dd>
        <dt>Verify Code</dt>
        <dd>{code}</dd>
      </dl>
      <button onClick={handleLogin}>Login</button>
      <hr />
      <div>
        <h3>
          Home{" "}
          <button onClick={handleSignout} className="btn btn-link">
            Signout
          </button>{" "}
        </h3>
        Hello ! {cookies.username}
      </div>
    </div>
  );
}
