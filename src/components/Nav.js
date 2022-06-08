import React from 'react'
import './Nav.css'

function Nav() {

    return (
        <div className=''>

            <div className="container">
                <div className='row'>
                    <div className='col-md-12 sectionbackground '>

                        <div className='sectiontitle'>
                            <h1 className='sectiontitleh'>Hoş Geldiniz.</h1>
                            <h3 className='sectiontitleh2'>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h3>
                        </div>

                        <div className='searchbar'>
                            <form
                                className="inner_search_form"
                                action="/"
                                acceptCharset='utf-8'
                            >

                                <input
                                    type="text"
                                    className='inner_search_v4'
                                    dir='auto'
                                    name="query"
                                    tabIndex="1"
                                    autoCorrect='off'
                                    spellCheck="false"
                                    placeholder='Film, dizi, kişi ara...'
                                />

                                <input
                                    type="submit"
                                    value="Search"
                                    className='searchbutton'
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav