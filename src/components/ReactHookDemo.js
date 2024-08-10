import { useState, useEffect } from 'react';

export default function ReactHookDemo() {
    const[msg, setmsg] = useState();

    function handleSuccessClick(){
        setmsg(<SuccessComponent />);
    }
    function handleErrorClick(){
        setmsg(<ErrorComponent />);
    }
    return (
        <div className='container-fluid'>
            <button onClick={handleSuccessClick}>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <hr></hr>
            <div>
                {msg}
            </div>

        </div>
    )
}

function SuccessComponent(){
    useEffect(() =>{
        alert('Success Component will Mount');
        return(() => {
            alert('Success Component will Unmount');
        })
    },[])
    return(
        <div>
            <h2>Login Success....</h2>
        </div>
    )
}

function ErrorComponent(){
    useEffect(() =>{
        alert('Error Component will Mount');
        return(() => {
            alert('Error Component will Unmount');
        })
    },[])
    return(
        <div>
            <h2>Login Invalid....</h2>
        </div>
    )
}