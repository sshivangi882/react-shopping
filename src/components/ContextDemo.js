

export default function ContextDemo(){

    return(
        <div className="container-fluid">
           <h1>Site Index</h1>
            <HeaderComponent/>

        </div>
    )
}

function HeaderComponent(){
    return(
        <div className="bg-info text-white" style={{height:'250px', padding:'10px'}}>
            <h2>Home</h2>
            <NavbarComponent/>
        </div>
    )
}

function NavbarComponent(){
    return (
        <div className="btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">User</button>
            </div>
        </div>
    )
}