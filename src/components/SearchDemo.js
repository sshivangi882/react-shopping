// import { serialize } from "mongodb";
import { useEffect } from "react";
import { useLocation, BrowserRouter } from "react-router-dom";
// import { serializeFormQuery } from "../utils/utils";


export default function SearchDemo()

{
    useEffect(() =>{

    },[])
    function handleSubmit(event){
        var Params = useLocation.search;
        console.log(Params);
    }
      

   
    return(
        <div>
            <h2>Search Params</h2>
            <form>
                <d>
                    <dt>User Name</dt>
                    <dd><input name="UserName" type="text"/></dd>
                    <dt>AGe</dt>
                    <dd><input name="Age" type="number"/></dd>
                </d>
            </form>
        </div>
    )
}