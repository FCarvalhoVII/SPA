import React from 'react';
import Navbar from './navbar/Navbar'
import Content from './content/Content'
import Footer from './footer/Footer'

import './Home.css';

function Home() {
    return (
        <div className="spa">
            <div className="row">
                <Navbar />
                <Content />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
