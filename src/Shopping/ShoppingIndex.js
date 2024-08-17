import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Electronics from './Electronics';
import Footwear from './Footwear';
import Fashion from './Fashion';
import ShoppingComponent from '../components/ShoppingComponent';

export default function ShoppingIndex() 
{
    return(
        <div className="container-fluid">
            <h2>Shopping Index</h2>
            <Router>
                <ul>
                    <li><Link to="/electronics">Electronics</Link></li>
                    <li><Link to="/foorwear">Footwear</Link></li>
                    <li><Link to="/fashion">Fashion</Link></li>
                    <li><Link to="/shopping">Shop Home</Link></li>
                </ul>
                <hr/>
                <Routes>
                    <Route  path='/elecronics' element={<Electronics/>}></Route>
                    <Route path='/footwear' element={<Footwear/>}></Route>
                    <Route path='/fashion' element={<Fashion/>}></Route>
                    <Route path='/shopping' element={<ShoppingComponent/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}