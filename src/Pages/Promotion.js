import Footer from "../Components/Footer"
import './styles/Promotion.css'

export default function Promotion(){
    return(
        <div id="promotion">
            <h1 className="promotion-title">Promotion</h1>

            <h3 className="promotion-subtitle">Ketentuan Promosi : </h3>
            <ol className="promotion-list">
                <li>Mencantumkan Logo Kami Kreator pada list Media Partner.</li>
                <li>Tag akun instagram @kamikreator pada post dan caption di poster.</li>
                <li>Maksimal poster yang sudah memenuhi syarat yaitu H-3 dari jadwal posting yang sudah disepakati.</li>
            </ol>

            <h1 className='package-title'>PAKET PROMOSI</h1>

            <div className="package">
                <div className='package-card'>
                    <h1>FREEDOM BUNDLE</h1>
                    <h1>FREE</h1>
                </div>
                <hr />
                <div className='package-list'>
                    <ul>
                        <li>minimal 20 akun Follow Instagram @kamikreator.</li>
                        <li>mendapatkan 1x upload di story instagram @kamikreator.</li>
                    </ul>
                </div>
                <div className='package-card'>
                    <h1>FLASH BUNDLE</h1>
                    <h1>FREE</h1>
                </div>
                <hr />
                <div className='package-list'>
                    <ul>
                        <li>minimal 20 akun Follow Instagram @kamikreator.</li>
                        <li>mendapatkan 1x upload di story instagram @kamikreator.</li>
                    </ul>
                </div>
                <div className='package-card'>
                    <h1>FOR YOU BUNDLE</h1>
                    <h1>FREE</h1>
                </div>
                <hr />
                <div className='package-list'>
                    <ul>
                        <li>minimal 40 akun Follow Instagram @kamikreator.</li>
                        <li>mendapatkan 1x upload di story instagram @kamikreator dan
                            1x upload di feed Instagram @kamikreator (H+3 delete post).</li>
                    </ul>
                </div>
                <div className='package-card'>
                    <h1>FIRST PAY BUNDLE</h1>
                    <h1>10K</h1>
                </div>
                <hr />
                <div className='package-list'>
                    <ul>
                        <li>mendapatkan 1x upload di story instagram @kamikreator dan
                            1x upload di feed Instagram @kamikreator (H+3 delete post).
                        </li>
                    </ul>
                </div>
            </div>

            <Footer />
        </div>
    )
}