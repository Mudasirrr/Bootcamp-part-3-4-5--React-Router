import React ,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
class Navbar extends Component{

    render(){
        return(
                        
            <nav>
            <div className="nav-wrapper"style={{background:"#6200ee"}} >
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/profile">Profile </NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
            </nav>
        )
    }
}
export default Navbar;