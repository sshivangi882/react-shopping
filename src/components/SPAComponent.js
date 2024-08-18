import { BrowserRouter, Route, Routes,Link } from "react-router-dom"
import ShoppingComponent from "./ShoppingComponent"

export default function SPAComponent(){

    function HTML(){
        return(
            <>
            <main>
                        <h2>HTML</h2>
                        <p>It is a markup Language</p>
                    </main>
            </>

        )
    }

    function CSS(){
        return(
            <>
            <main>
                        <h2>CSS</h2>
                        <p>It is a  style</p>
                    </main>
            </>

        )
    }

    function JS(){
        return(
            <>
            <main>
                        <h2>javaScript</h2>
                        <p>It is a Language</p>
                    </main>
            </>

        )
    }
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/js">javaScript</Link></li>
                    <li><Link to="/shopping">Shopping</Link></li>
                </ul>
            </nav>
            <hr/>
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