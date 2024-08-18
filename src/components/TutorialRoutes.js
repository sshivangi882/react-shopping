import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ShoppingComponent from "./ShoppingComponent";
import { HTML, CSS, JS } from "./TutorialRoutes";

export default function TutorialRoutes()
{
    return(
        <div className="container-fluid">
           <BrowserRouter>
           <Routes>
                <Route path="shopping" element={
                    <ShoppingComponent/>
                }/>
                <Route path="html" element={
                    <HTML/>
                }/>
                 <Route path="css" element={
                    <CSS/>
                }/>
                 <Route path="js" element={
                    <JS/>
                }/>

                <Route path="/" element={
                    <main>
                        <h2>Home</h2>
                        <p>Tutorial Home</p>
                    </main>
                }/>
                <Route path="*" element={
                    <main>
                       <code>Not Found : Page you requested Not found</code>
                    </main>
                }/>
            </Routes>
           </BrowserRouter>
        </div>
    )
}