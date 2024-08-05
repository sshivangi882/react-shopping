import { useState } from "react";

export default function FormComponent() {
  const [users] = useState([
    { UserId: "john" },
    { UserId: "john12" },
    { UserId: "david" },
    { UserId: "john_nit" },
  ]);

  const [useMsg, setUseMsg] = useState("");
  const [isUserValid, setUserValid] = useState(false);

  function VerifyUserId(e) {
    for (var user of users) {
      if (user.UserId == e.target.value) {
        setUseMsg("User Id already taken! Try another");
        setUserValid(false);
        break;
      } else {
        setUseMsg("User Id available");
        setUserValid(true);
      }
    }
  }
  return (
    <div className="Container-fluid">
      <h2>Register User</h2>
      <dl>
        <dt>User Id</dt>
        <dd>
          <input type="text" onKeyUp={VerifyUserId}></input>
        </dd>
        <dd className={isUserValid == true ? "text-success" : "text-danger"}>
          {useMsg}
        </dd>
      </dl>
    </div>
  );
}
