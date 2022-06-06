import React from 'react'
import './Footer.css'


// {new Date().getFullYear()} Copyright: <a href="https://github.com/alikartalonline"> github.com/alikartalonline</a>



function Footer() {
    return (
        <div className='footer'>
        <div className='container'>
            <div class="row">

                <div class="col-6 align-center">
                    <div className='join'>
                        <ul className='liste'>
                            <li>
                                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="clone logo" width="130" height="94" />
                            </li>
                            <li>
                                <a className='forum' href="#">Foruma Katılın</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div class="col-6 align-center">


                    <div className='big'>

                        <div className='footertitles'>
                            <p>TEMEL</p>
                            <ul className='footerlists '>
                                <li><a id="footera" href="#">TMDB Hakkında</a></li>
                                <li><a id="footera" href="#">Bize Ulaşın</a></li>
                                <li><a id="footera" href="#">Destek Forumları</a></li>
                                <li><a id="footera" href="#">API</a></li>
                                <li><a id="footera" href="#">Sistem Durumu</a></li>
                            </ul>
                        </div>


                        <div className='footertitles'>
                            <p>KATKIDA BULUNUN</p>
                            <ul className='footerlists '>
                                <li><a id="footera" href="#">Katılım Başvuru Kitabı</a></li>
                                <li><a id="footera" href="#">Yeni Film Ekle</a></li>
                                <li><a id="footera" href="#">Yeni Dizi Ekle</a></li>
                            </ul>
                        </div>

                        <div className='footertitles'>
                            <p>TOPLULUK</p>
                            <ul className='footerlists '>
                                <li><a id="footera" href="#">Rehberler</a></li>
                                <li><a id="footera" href="#">Tartışmalar</a></li>
                                <li><a id="footera" href="#">Öne Çıkanlar</a></li>
                                <li><a id="footera" href="#">Twitter</a></li>
                            </ul>
                        </div>

                        <div className='footertitles'>
                            <p>YASAL</p>
                            <ul className='footerlists '>
                                <li><a id="footera" href="#">Kullanım Koşulları</a></li>
                                <li><a id="footera" href="#">API Kullanım Şartları</a></li>
                                <li><a id="footera" href="#">Gizlilik Politikası</a></li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer