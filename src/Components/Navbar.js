import "./styles/Navbar.css"
import { Outlet, NavLink } from "react-router-dom";
import Logo from '../Images/logo.png'

export default function Navbar(){
    return (
        <div>
            <div className="navbar">
                <div>
                    <a href="/"><img className="logo" src={Logo} alt="logo" /></a>
                </div>
                <div>
                    <ul>
                        <li><NavLink className='navlink' to='/promotion'>Promotion</NavLink></li>
                        <li><NavLink className='navlink' to='/mentoring'>Mentoring</NavLink></li>
                        <li><NavLink className='navlink' to='/community'>Community</NavLink></li>
                        <li><NavLink className='navlink' to='/internship'>Internship</NavLink></li>
                        <li><NavLink className='navlink' to='/volunteer'>Volunteer</NavLink></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )
}