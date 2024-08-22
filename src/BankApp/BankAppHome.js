import { Link ,Outlet} from "react-router-dom"

export default function BankAppHome(){
    return (
        <div>
            <h2>Bank App Home</h2>
            <nav>
                
              <span><Link to="/personal">Personal</Link></span>
              <span>|</span>
              <span><Link to="/nri">NRI</Link></span>
            
                                
            </nav>
            <hr></hr>
            <Outlet/>


        </div>
    )
}