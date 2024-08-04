import BaseComponent from "bootstrap/js/dist/base-component";
import { useState } from "react"


export default function LoginComponent(){

    const [theme, setTheme]= useState('');

    function handleThemeChange(e){
        if(e.target.checked) {
            setTheme('bg-dark text-white p-2 w-50')
        } else {
            setTheme('bg-light text-dark p-2 w-50')
        }

    }
    return(
       <div className="containe-fluid">
        <div className={theme}>
        <h2>User Login</h2>
        <div className="form-switch">
            <input onChange={handleThemeChange} className="form-check-input" type="checkbox" />Dark theme

        </div>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text"/></dd>
            <dt>Password</dt>
            <dd>   <input type="password"/></dd>
        </dl>
        <button>Login</button>
        </div>
       </div>
    )
}