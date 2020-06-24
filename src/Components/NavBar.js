import React, { Component } from 'react';
import {Link} from "react-router-dom";

class  Navbar extends Component  {
render() {

    
    return (
        <div className=" mb-2 bg-primary text-white">
            <nav className="navbar navbar-light container navbar-expand">
            <Link className="nav-link bg-primary text-white"  to="/">
                 İsimdeyim.net
            </Link>
            <ul className="navbar-nav ml-auto">
               <li>
                   <Link className=" nav-link bg-primary text-white " to="/kaydol">
                   Kaydol
                   </Link>
                   
               </li>
               <li>
                   <Link className=" nav-link bg-primary text-white " to="/üyegirisi">
                       Üye Girişi
                       </Link>
                   
                   
                </li>
            </ul>
            </nav>
        </div>
    )
}
}
export default  Navbar;