import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Footer from './Footer'

const Main = () => {
    return (
        <div>
            <Nav/>
            <div className='container'>
            <Home/>
            </div>
            <Footer/>
        </div>
    )
}

export default Main