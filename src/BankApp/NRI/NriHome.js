import { Link, Outlet } from "react-router-dom";
export default function NriHome() {
  return (
    <div>
      <h2>Nri Home </h2>
      <ul>
        <li>
          <Link to="nlogin">Login</Link>
        </li>
        <li>
          <Link to="nRegister">Register</Link>
        </li>
      </ul>
      <hr>
      </hr>
      <Outlet/>
    </div>
  );
}
