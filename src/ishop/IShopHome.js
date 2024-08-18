import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";

export default function IShopHome(){
    return (
        <div>
            <h2>Shopping Home</h2>
            <Link to="/register"> New Register</Link>
            <span> | </span>
            <Link to="/login">Existing User</Link>
            
        </div>
    )   
}