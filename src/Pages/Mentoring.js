import Footer from "../Components/Footer"
import './styles/Mentoring.css'
import Mentoring1 from '../Images/mentoring1.png'
import Mentoring2 from '../Images/mentoring2.png'
import Mentoring3 from '../Images/mentoring3.png'
import Kakak1 from '../Images/kakak1.jpg'
import Kakak2 from '../Images/kakak2.jpg'
import Kakak3 from '../Images/kakak3.jpg'
import Kakak4 from '../Images/kakak4.jpg'

export default function Mentoring(){
    return(
        <div id="mentoring">
            <h1 className="mentoring-title">Mentoring</h1>

            <div className="mentoring-sect">
                <h3>Buat teman-teman yang masih labil dan insecure sama usaha dan skill yang teman-teman miliki,
                jangan khawatir kok. Ada kakak-kakak super keren ini yang siap bantuin kamu lewat mentoring supaya kamu
                jadi siap dan gak bimbang sama masa depan kamu</h3>

                <div className="mentoring-img">
                    <img className="mentoring1" src={Mentoring1} alt="" />
                    <img className="mentoring2" src={Mentoring2} alt="" />
                    <img className="mentoring3" src={Mentoring3} alt="" />
                </div>
            </div>
            
            <div className="kakak-sect">
                <h1 className="kakak-title">Kenalin Kakak-kakak Keren ini</h1>

                <div className="kakak-card">
                    <img className="kakak-img" src={Kakak1} alt="" />
                    <img className="kakak-img" src={Kakak2} alt="" />
                    <img className="kakak-img" src={Kakak3} alt="" />
                    <img className="kakak-img" src={Kakak4} alt="" />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}