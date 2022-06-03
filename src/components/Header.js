import React from 'react'
import './Header.css';


function Header() {
  return (
    <div className='content '>

      <div className='sub_media  '>
        <div className='nav_wrapper lists'>

          <div className='titles'>
            <a className='' href="/">
              <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20" />
            </a>


            <div class="dropdown">
              <h5 className='title'>Filmler</h5>
              <div class="dropdown-content">
                <a href="#">Popüler</a>
                <a href="#">Gösterimdekiler</a>
                <a href="#">Yakında</a>
                <a href="#">En Fazla Oy Alanlar</a>
              </div>
            </div>


            <div class="dropdown">
              <h5 className='title'>Diziler</h5>
              <div class="dropdown-content">
                <a href="#">Popüler</a>
                <a href="#">Günün Programı</a>
                <a href="#">Televizyonda</a>
                <a href="#">En Fazla Oy Alanlar</a>
              </div>
            </div>

            <div class="dropdown">
              <h5 className='title'>Kişiler</h5>
              <div class="dropdown-content">
                <a href="#">Popüler Kişier</a>
              </div>
            </div>

            <div class="dropdown">
              <h5 className='title'>Daha Fazla</h5>
              <div class="dropdown-content">
                <a href="#">Tartışmalar</a>
                <a href="#">Öne Çıkanlar</a>
                <a href="#">Destek</a>
                <a href="#">API</a>
              </div>
            </div>

          </div>

          <div className="dropdown ">
            <div className="title_logo title">
            </div>
            <div className="dropdown-content ">
              <p className='parag '>Bir filmi veya diziyi bulamıyor musun? Eklemek için oturum aç.</p>
            </div>
          </div>

          <div className='tr'>
            <button type="button" className="btn btn-outline-light btn-sm">TR</button>
          </div>

          <div className='title' >
            <h6>Giriş</h6>
          </div>

          <div className='title'>
            <h6 >TMDb'ye Katıl</h6>
          </div>

          <div className='title'>
            <div className='title_search'></div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header







