import { Outlet, Link } from "react-router-dom";
import Logo from '../Images/logo.png'
import './styles/Footer.css'

function scrollTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default function Footer(){
    return (
        <div>
            <div className="footerbg">
                <div>
                    <img className="footer-logo" src={Logo} alt="" />
                    <p className="footer-desc">Copyright Kami Kreator @2023</p>
                </div>

                <div className="footer-nav">
                    <Link className="footer-link" onClick={scrollTop} to="/promotion">Promotion</Link>
                    <Link className="footer-link" onClick={scrollTop} to="/mentoring">Mentoring</Link>
                    <Link className="footer-link" onClick={scrollTop} to="/community">Community</Link>
                    <Link className="footer-link" onClick={scrollTop} to="/internship">Internship</Link>
                    <Link className="footer-link" onClick={scrollTop} to="/volunteer">Volunteer</Link>
                </div>

                <div className="sosmed">
                    <Link className="footer-sosmed ig" target="_blank" to="https://www.instagram.com/kamikreator/"><i class="fa-brands fa-instagram"></i></Link>
                    <Link className="footer-sosmed in" target="_blank" to="https://www.linkedin.com/company/kami-kreator/about/"><i class="fa-brands fa-linkedin"></i></Link>
                    <Link className="footer-sosmed tt" target="_blank" to="https://www.tiktok.com/@kamikreator"><i class="fa-brands fa-tiktok"></i></Link>
                    <Link className="footer-sosmed sp" target="_blank" to="https://open.spotify.com/show/2t1tAEgAI6byGxgVCptewX?si=8c31c2d67e93495d"><i class="fa-brands fa-spotify"></i></Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}