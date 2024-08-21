import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import React from "react";

export default function IShopDashBoard(){

    const [cookies, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();
    const [categories, setCategories] = useState([]);
    let navigate = useNavigate();

    function LoadCategories(){
        axios.get("http://localhost:4000/getcategories")
        .then((response) => {
            setCategories(response.data);

        });
    }

    useEffect(() =>{
        setUserId(cookies["userid"]);
        LoadCategories();
    })

    function handleSignOut(){
        removeCookie("userid");
        navigate("/login");
    }
    return(
        <div>
            <h2>User Dashboard {userid} - <button onClick={handleSignOut} className="btn btn-link">SignOut</button></h2>
            <h3> Product Categories</h3>
            <ol>
                {
                    categories.map((item=>
                        <li key={item.category}>{item.category.toUpperCase()}</li>
                    )
                )
                }
            </ol>
        </div>
    )
}