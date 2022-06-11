import React from 'react'
import './Article2.css'


function Article2() {
    return (
        <div className='container article2background'>
            <div className='row content_wrapper'>

                <div className='col-12 mt-3'>
                    <h3>Bugün Katıl</h3>
                </div>

                <div className='row'>

                    <div className='col-6'>
                        <p>Get access to maintain your own <em>custom personal lists</em>, <em>track what you've seen</em> and search and filter for <em>what to watch next</em>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, and blutv.
                        </p>

                        <p className="articlebutton mt-4">
                            <a href="/" class="articlea">Kaydol</a>
                        </p>
                    </div>

                    <div className='col-6 column '>
                        <ul className='articlelist'>
                            <li>Reklamsız TMDb'nin tadını çıkarın</li>
                            <li>Kişisel bir izleme listesi tutun</li>
                            <li>Abone olduğunuz akış hizmetlerine göre filtreleyin ve izleyecek bir şeyler bulun</li>
                            <li>İzlediğiniz filmleri, dizileri ve TV şovlarını kaydedin</li>
                            <li>Kişisel listeler oluşturun</li>
                            <li>Veritabanımıza katkıda bulunun ve geliştirin</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Article2