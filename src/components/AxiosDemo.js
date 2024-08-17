import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosDemo(){
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        axios.get("http://localhost:4000/getusers")
        .then(function(response){
            setUsers(response.data);

        }).catch(function(ex){
            console.log(ex);
        })
            
    },[])

    return(
        <div className="conatainer-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(user =>
                        <li key={user.UserId}>{user.UserId}</li>
                    )
                }

            </ol>
        </div>
    )
}