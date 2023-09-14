import Footer from "../Components/Footer"
import './styles/Internship.css'
import Programteam from '../Images/program-team.png'
import Webdev from '../Images/web-dev.png'
import Content from '../Images/content-creator.png'
import Graphic from '../Images/graphic-design.png'

export default function Internship(){
    return(
        <div id="internship">
            <h1 className="intern-title">INTERNSHIP</h1>

            <h1 className="sdk-title">SYARAT DAN KETENTUAN</h1>
            <ul className="sdk-list">
                <li>Siswa SMA / sederajat atau Mahasiswa aktif / freshgraduate</li>
                <li>Berasal dari semua jurusan</li>
                <li>Diutamakan berdomisili di Surabaya dan sekitarnya Aktif, inisiatif, inovatif, dan jujur dalam bekerja</li>
                <li>Memiliki Minat dalam dunia konten digital dan aktif di sosial media</li>
                <li>Berkomitmen untuk melaksanakan program internship selama 3 bulan</li>
            </ul>

            <h1 className="benefit-title">BENEFIT</h1>
            <ul className="benefit-list">
                <li>Fee based on performance</li>
                <li>Sertifikat</li>
                <li>Surat rekomendasi (bila perlu)</li>
                <li>Rekomendasi Linkedin (bila kinerja dinilai baik)</li>
                <li>Berkesempatan bergabung menjadi tim inti kami kreator</li>
                <li>Pengalaman profesional di dalam dunia kerja</li>
                <li>Pengembangan diri dan personal branding</li>
            </ul>

            <h1 className="pos-title">POSITION</h1>

            <div className='single-pos'>
                <h2 className="pos-subject">A. Program Team</h2>
                <div className='pos-card'>
                    <ul className="pos-list">
                        <dt>Kriteria : </dt>
                        <dd>Memiliki pengalaman / ketertarikan dalam mengatur acara / program</dd>
                        <dd>Memiliki kemampuan komunikasi, manajerial, dan negosiasi yang baik</dd>
                        <dd>Berpengalaman dalam membuat ToR, proposal, offering letter, dan rundown dalam acara</dd>

                        <dt>Tugas : </dt>
                        <dd>Merancang konsep pelaksanaan program yang akan diadakan Kami Kreator</dd>
                        <dd>Menyusun hal-hal yang dibutuhkan dalam pelaksanaan program</dd>
                        <dd>Bertanggung jawab penuh dalam mengawasi dan memastikan program yang telah dirancang berjalan dengan lancar</dd>
                    </ul>

                    <img src={Programteam} alt="" />
                </div>
            </div>

            <div className='single-pos'>
                <h2 className="pos-subject">B. Web Development</h2>
                <div className='pos-card'>
                    <ul className="pos-list">
                        <dt>Kriteria : </dt>
                        <dd>Memiliki pengalaman dibidang website</dd>
                        <dd>Memiliki pengetahuan tentang alat dan perangkat lunak pengembangan website</dd>
                        <dd>Mempunyai keterampilan komunikasi yang baik dan berorientasi pada pemecahan masalah</dd>
                        <dd>Mampu bekerja secara mandiri dan sebagai bagian dari tim</dd>

                        <dt>Tugas : </dt>
                        <dd>Membuat perencanaan dan mengembangkan situs web bersama dengan pihak ketiga (pengembang website)</dd>
                        <dd>Melakukan pemeliharaan (maintenance) dan pembaharuan isi website secara berkala</dd>
                        <dd>Memastikan situs web aman dan sesuai dengan peraturan perlindungan data</dd>
                        <dd>Memberikan dukungan kepada pengguna untuk memastikan mereka dapat menavigasi situs web dan menggunakan fitur-fiturnya</dd>
                        <dd>Memberikan rekomendasi untuk perbaikan website</dd>
                        <dd>Mengembangkan dan menerapkan kebijakan prosedur situs web</dd>
                        <dd>Memantau situs web pesaing untuk teknologi, tren, dan inovasi baru</dd>
                        <dd>Melakukan koordinasi dengan tim Kami Kreator untuk memastikan konten up-to-date</dd>
                    </ul>

                    <img src={Webdev} alt="" />
                </div>
            </div>

            <div className='single-pos'>
                <h2 className="pos-subject">C. Content Creator</h2>
                <div className='pos-card'>
                    <ul className="pos-list">
                        <dt>Kriteria : </dt>
                        <dd>Berpengalaman menjadi content creator Tiktok</dd>
                        <dd>Mampu menjadi talent</dd>
                        <dd>Berpikir kreatif, up-to-date, peka terhadap tren, youthful, modern, terbuka, interaktif</dd>
                        <dd>Mampu melakukan analisis terhadap tren terbaru di Tiktok</dd>
                        <dd>Mampu meluangkan waktu untuk membuat konten mingguan sesuai dengan Tone of Voice Kami Kreator</dd>

                        <dt>Tugas : </dt>
                        <dd>Menjadi talent untuk videographer di YouTube</dd>
                        <dd>Eksekusi konten, edit, dan upload ke Tiktok</dd>
                        <dd>Membuat brief dari ide yang sudah dibuat social media specialist yang up-to-date serta sesuai dengan identitas dan Tone of Voice Kami Kreator pada social media Tiktok</dd>
                    </ul>

                    <img src={Content} alt="" />
                </div>
            </div>

            <div className='single-pos'>
                <h2 className="pos-subject">D. Graphic Designer</h2>
                <div className='pos-card'>
                    <ul className="pos-list">
                        <dt>Kriteria : </dt>
                        <dd>Berpengalaman menjadi Graphic Designer</dd>
                        <dd>Menguasai Adobe Family seperti Photoshop dan Illustrator</dd>
                        <dd>Have a Good Taste at Design</dd>
                        <dd>Berpikir kritis</dd>
                        <dd>Kreatif & Inovatif</dd>
                        <dd>Skill Motion is a plus</dd>

                        <dt>Tugas : </dt>
                        <dd>Mengembangkan Visual Branding Kami Kreator</dd>
                        <dd>Mengevaluasivisual Kami Kreator secara rutin</dd>
                        <dd>Memvisualisasikan/Desain segala konten yang akan disajikan kepada Kreators </dd>
                        <dd>Mengembangkan visual Kami Kreator dengan identitas dan Tone of Voice Kami Kreator</dd>
                    </ul>

                    <img src={Graphic} alt="" />
                </div>
            </div>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLSegJmt_NEG9QfGOikpXYuwAD57WP4msPUACk5wFF6w4wBwHjw/closedform"><button className="daftar">DAFTAR SEKARANG BRO</button></a>

            <Footer />
        </div>
    )
}