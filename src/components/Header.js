import React from 'react'
import './Header.css';


function Header() {
  return (
    <nav className="aboutnav">
      <div className='container' >
        <div className='row'>

          <div className="container-fluid col-sm-12 col-md-6 col-lg-2 mt-3 menutitles">
            <a className='' href="/">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="The Movie Database (TMDB)" width="154" height="20" />
            </a>
          </div>

          <div className='col-lg dropdown cursor'>
            <h5 className='text-light menutitles' id="dropdownMenuButton1" >Filmler</h5>
            <div class="dropdown-content">
              <a href="#">Popüler</a>
              <a href="#">Gösterimdekiler</a>
              <a href="#">Yakında</a>
              <a href="#">En Fazla Oy Alanlar</a>
            </div>
          </div>

          <div className='col-lg dropdown cursor'>
            <h5 className='text-light menutitles' id="dropdownMenuButton1">Diziler</h5>
            <div class="dropdown-content">
              <a href="#">Popüler</a>
              <a href="#">Günün Programı</a>
              <a href="#">Televizyonda</a>
              <a href="#">En Fazla Oy Alanlar</a>
            </div>
          </div>



          <div className="col-lg dropdown cursor">
            <h5 className='text-light menutitles' id="dropdownMenuButton1">Kişiler</h5>
            <div className="dropdown-content">
              <a href="#">Popüler Kişier</a>
            </div>
          </div>

          <div className="col-lg-1 dropdown cursor ">
            <h5 className='text-light menutitles' id="dropdownMenuButton1">Daha Fazla</h5>
            <div className="dropdown-content">
              <a href="#">Tartışmalar</a>
              <a href="#">Öne Çıkanlar</a>
              <a href="#">Destek</a>
              <a href="#">API</a>
            </div>
          </div>

          <div className="col-lg dropdown cursor mt-3 plus">
            <div className="title_logo title" id="dropdownMenuButton1">
            </div>
            <div className="dropdown-content">
              <p className='parag'>Bir filmi veya diziyi bulamıyor musun? Eklemek için oturum aç.</p>
            </div>
          </div>

          <div className='col-lg tr mt-3'>
            <button type="button" className="btn btn-outline-light btn-sm">TR</button>
          </div>

          <div className='col-lg text-light cursor mt-3' >
            <h6>Giriş</h6>
          </div>

          <div className='col-lg-2 text-light cursor mt-3'>
            <h6 >TMDb'ye Katıl</h6>
          </div>

          <div className='col-md-6 col-lg text-light cursor mt-3'>
            <div className='title_search'></div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header







