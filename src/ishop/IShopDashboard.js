import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function IShopDashBoard(){

    const [cookies, setCookie, removeCookie] = useCookies();
    const [userid, setUserId] = useState();
    let navigate = useNavigate();

    useEffect(() =>{
        setUserId(cookies["userid"]);
    })

    function handleSignOut(){
        removeCookie("userid");
        navigate("/login");
    }
    return(
        <div>
            <h2>User Dashboard {userid} - <button onClick={handleSignOut} className="btn btn-link">SignOut</button></h2>
        </div>
    )
}