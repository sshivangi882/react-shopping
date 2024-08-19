
import {useFormik} from "formik";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

export default function IShopLogin(){

    const [users, setUsers] = useState([]);
    const formik = useFormik({
        initialValues : {
            UserId: '',
            Password: '',
        },
        onSubmit : values =>{
            axios.get("http://localhost:4000/users")
            .then(response=>{
                setUsers(response.data);
                
            })
        }
    })

    useEffect(()=>{
        
    })
    return (
        <div>
            <h2>User Login</h2>
            <form>
                <dl>
                    <dt>User Id</dt>
                    <dd><input value={formik.values.UserId} onChange={formik.handleChange} type="text" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" /></dd>
                </dl>
                <button  value={formik.values.Password} onChange={formik.handleChange} className="btn btn-primary">Login</button>
                <br></br>
                <Link onSubmit={formik.handleSubmit} to="/register">New User? Register</Link>
            </form>
        </div>
    )
}