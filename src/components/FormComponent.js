import React, { useState } from "react";

function FormComponent() {
  const [useMsg, setUseMsg] = useState("");
  const [isUserValid, setIsUserValid] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("");

  function HideUserMsg() {
    setUseMsg("");
  }

  function VerifyUserId(e) {
    const userId = e.target.value;
    if (userId.length >= 6) {
      setUseMsg("User ID is valid");
      setIsUserValid(true);
    } else {
      setUseMsg("User ID must be at least 6 characters long");
      setIsUserValid(false);
    }
  }

  function VerifyPassword(e) {
    if (e.target.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setPwdMsg("Password is strong");
    } else {
      setPwdMsg("Password is weak");
    }
  }

  return (
    <div className="Container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>User Id</dt>
        <dd>
          <input
            type="text"
            onKeyUp={VerifyUserId}
            onBlur={HideUserMsg}
          ></input>
        </dd>
        <dd className={isUserValid ? "text-success" : "text-danger"}>
          {useMsg}
        </dd>
        <dt>Password</dt>
        <dd>
          <input type="password" onKeyUp={VerifyPassword}></input>
        </dd>
        <dd
          className={
            pwdMsg === "Password is strong" ? "text-success" : "text-danger"
          }
        >
          {pwdMsg}
        </dd>
      </dl>
    </div>
  );
}

export default FormComponent;
