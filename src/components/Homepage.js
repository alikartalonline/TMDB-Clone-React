import React from 'react';
import Header from './Header.js';
// import Footer from './Footer.js';
import Nav from './Nav.js';
import Section from './Section.js';
import Section2th from './Section2th.js';
import Section3th from './Section3th.js';
import Article from './Article.js';
import Article2 from './Article2.js';

function Homepage() {
   

    return (
        <div>
            <Header />
            <Nav />
            <Section />
            <Section2th />
            <Section3th />
            <Article2 />
            <Article />

            {/* <Footer /> */}
        </div>
    )
}

export default Homepage