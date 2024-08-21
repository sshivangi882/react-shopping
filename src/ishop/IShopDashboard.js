import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function IShopDashBoard() {
  const [cookies, setCookie, removeCookie] = useCookies(["userid"]);
  const [userid, setUserId] = useState("");
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  function LoadCategories() {
    axios
      .get("http://localhost:4000/getcategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }

  useEffect(() => {
    setUserId(cookies["userid"]);
    LoadCategories();
  }, [cookies]);

  function handleSignOut() {
    removeCookie("userid");
    navigate("/login");
  }

  return (
    <div>
      <h2>
        User Dashboard {userid} -{" "}
        <button onClick={handleSignOut} className="btn btn-link">
          SignOut
        </button>
      </h2>
      <h3>Product Categories</h3>
      <ol>
        {categories.map((item) => (
          <li key={item.category}>
            <Link to={"/products/" + item.category}>
              {item.category.toUpperCase()}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
