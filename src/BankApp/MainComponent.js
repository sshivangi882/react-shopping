
import { BrowserRouter,Link,Route,Routes } from "react-router-dom"
import BankAppHome from "./BankAppHome"
import PersonalLogin from "./Personal/PersonalLogin"
import PersonalRegister from "./Personal/PersonalRegister"
import NriRegister from "./NRI/NriRegister"
import NriLogin from "./NRI/NriLogin"
import NriHome from "./NRI/NriHome"
import PersonalHome from "./Personal/PersonalHome"

export default function MainComponent(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<BankAppHome/>}>
                <Route path="personal" element={<PersonalHome/>}>
                    <Route path="plogin" element={<PersonalLogin/>}/>
                    <Route path="pRegister" element={<PersonalRegister/>}/>
                </Route>
                <Route path="nri" element={<NriHome/>}>
                    <Route path="nlogin" element={<NriLogin/>}/>
                    <Route path="nRegister" element={<NriRegister/>}/>
                </Route>
            </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}