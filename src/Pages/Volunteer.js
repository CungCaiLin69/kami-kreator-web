import Footer from "../Components/Footer"
import './styles/Volunteer.css'

export default function Volunteer(){
    return(
        <div id="volunteer">
            <h1 className="volunteer-title">Volunteer</h1>
            
            <h3 className="volunteer-sub">Beberap kegiatan volunteering kami seperti</h3>
            <ul className="volunteer-list">
                <li><i class="fa-solid fa-chalkboard-user"></i> Mengajar</li>
                <li><i class="fa-solid fa-person-chalkboard"></i> Mentoring</li>
                <li><i class="fa-solid fa-seedling"></i> Menanam Pohon</li>
                <li><i class="fa-solid fa-hand-holding-dollar"></i> Donasi</li>
                <li><i class="fa-solid fa-people-roof"></i> Santunan Yatim</li>
            </ul>
            <Footer />
        </div>
    )
}