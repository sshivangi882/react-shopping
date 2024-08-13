import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCaptcha } from "../hooks/useCaptcha";

export  function UserLogin(){
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [userDetails, setUserDetails] = useState({UserName:'', Password:''});
    const {code} = useCaptcha();

    function handleUserName(e){
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }
    function handlePassword(e){
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }
    function handleLogin(){
        setCookie("username",userDetails.UserName,{path:"/", expires:new Date("2022-07-02")});
        alert("Login Success..");
    }
    function handleSignout(){
        removeCookie("username");
        alert("Signed out Successfully..");
    }
    // useEffect(()=>{
    //     if(cookies.username==undefined) {
    //         alert("Please Login");
    //     }
    // },[]);

    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={handleUserName} type="text"/></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password"/></dd>
                <dt>Verify Code</dt>
                <dd>{code}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr/>
            <div>
            <h3>Home  <button onClick={handleSignout} className="btn btn-link">Signout</button> </h3>
            Hello ! {cookies.username}
            </div>
        </div>
    )
}
