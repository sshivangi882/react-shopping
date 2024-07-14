import { useState, useEffect } from "react";

export default function EventBindingComponent() 
{
    const [userName, setUserName]= useState('John')
    function handleUserName(e){
        setUserName(e.target.value);
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={handleUserName} /*value={userName}*/></input></dd>
            </dl>
            <h3>Hello ! {userName}</h3>
        </div>
    )
}