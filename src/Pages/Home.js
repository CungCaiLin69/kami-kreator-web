import './styles/Home.css'
import Footer from '../Components/Footer'
import HeaderImg from '../Images/header-img.png'
import LatarImg from '../Images/latar-img.png'
import KenapaImg from '../Images/kenapa-img.png'
import Podcreate from '../Images/podcreate.png'
import Tipscreate from '../Images/tipscreate.png'
import Webcreate from '../Images/webcreate.png'
import Ktalks from '../Images/ktalks.png'
import Weekcreate from '../Images/weekcreate.png'

export default function Home(){
    return(
        <div>
            <section id='header'>
                <img src={HeaderImg} alt="" />
                <h1>
                    Tempat yang cocok buat lu yang pengen
                    banget berkarya dalam membuat
                    konten tapi selalu insecure karena
                    merasa gapunya bakat atau
                    keterampilan yang bisa dibanggain.
                </h1>
            </section>

            <section id='latar-belakang'>
                <h1 className='latar-title'>Latar belakang</h1>
                <div className='latar-sect'>
                    <img src={LatarImg} alt="" />
                    <h1>"kami kreator hadir
                    karena adanya keresahan
                    dari founder yang ngerasa
                    memiliki passion tapi
                    gapunya keahlian di
                    bidang konten".</h1>
                    </div>
            </section>

            <section id='kenapa'>
                <h1 className='kenapa-title'>Kenapa ada kamikreator?</h1>
                <div className='kenapa-sect'>
                    <img src={KenapaImg} alt="" />
                    <h1>Kamikreator akan mematahkan stigma orang, yaitu bekerja di bidang digital creator harus
                    memiliki keahlian tersendiri, kamikreator yakin itu semua bisa muncul ketika kita mau mengembangkannya.
                    </h1>
                </div>
            </section>

            <section id='tujuan'>
                <h1 className='tujuan-title'>Tujuan</h1>
                <div className='tujuan-box'>
                    <div className='first-sect'>
                        <div className='one'>
                            <h1 className='nomor'>1</h1>
                            <p className='desc'>Membantu para konten kreator mengetahui apa sebenarnya minatnya dalam bidang konten</p>
                        </div>

                        <div className='two'>
                            <h1 className='nomor'>2</h1>
                            <p className='desc'>Membuat para konten kreator menjadi lebih mengerti segala hal mengenai pembuatan konten dalam berbagai cara</p>
                        </div>
                    </div>
                    
                    <div className='second-sect'>
                        <div className='three'>
                            <h1 className='nomor'>3</h1>
                            <p className='desc'>Menciptakan lebih banyak konten kreator yang percaya akan kemampuan yang dimilikinya.</p>
                        </div>
                        <div className='four'>
                            <h1 className='nomor'>4</h1>
                            <p className='desc'>Menciptakan kesempatan bagi para konten kreator hebat untuk mempublikasikan hasil karyanya.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='program'>
                <h1 className='program-title'>Program</h1>
                <div className='program-card 1'>
                    <h1 className='program-subject'>Podcreate</h1>
                    <div className='card-desc'>
                        <p className="program-desc">
                            Podcast 2 kali dalam sebulan (minggu ke-1 dan ke-3) yang akan membahas mengenai
                            segala permasalahan dalam membuat konten hingga diberi solusi dan motivasi untuk 
                            menyelesaikan didalamnya.
                        </p>
                        <img className="program-img" src={Podcreate} alt="" />
                    </div>
                </div>
                <div className='program-card 2'>
                    <h1 className='program-subject'>K-talks</h1>
                    <div className='card-desc'>
                        <p className="program-desc">
                            Minitalkshow melalui live instagram 2 kali dalam sebulan (minggu ke-2 dan ke-4) dengan
                            konten kreator dari berbagai latar belakang konten digital yang membahas mengenai
                            pengalamannya dalam membuat konten dan cara khusus dan tepat untuk memulai membuat konten tersebut.
                        </p>
                        <img className="program-img" src={Ktalks} alt="" />
                    </div>
                </div>
                <div className='program-card 3'>
                    <h1 className='program-subject'>Webcreate</h1>
                    <div className='card-desc'>
                        <p className="program-desc">
                            Webinar online 1 kali dalam sebulan yang mendatangkan langsung pembicara keren yang
                            memang handal di bidang konten digital yang akan membuat kamu jauh lebih tahu dan mengerti
                            mengenai dunia konten dari berbagai macam bentuk konten.
                        </p>
                        <img className="program-img" src={Webcreate} alt="" />
                    </div>
                </div>
                <div className='program-card 4'>
                    <h1 className='program-subject'>Tipscreate</h1>
                    <div className='card-desc'>
                        <p className="program-desc">
                        Sarana yang tepat untuk para konten kreator yang mau mempublikasikan hasil
                        karyanya (berbagai bentuk) ke platform kamikreator sebanyak 1 konten terpilih karena terbaik dalam 1 minggu.
                        </p>
                        <img className="program-img" src={Tipscreate} alt="" />
                    </div>
                </div>
                <div className='program-card card-5'>
                    <h1 className='program-subject'>Weekcreate</h1>
                    <div className='card-desc'>
                        <p className="program-desc">
                            Sarana yang tepat untuk para konten kreator yang mau mempublikasikan hasil karyanya (berbagai bentuk) 
                            ke platform kamikreator sebanyak 1 konten terpilih karena terbaik dalam 1 minggu.
                        </p>
                        <img className="program-img" src={Weekcreate} alt="" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}