import React from 'react'
import logo1 from '../media/logo-tsdb.png'
import logo2 from '../media/TheMealDB.png'
import { Link } from 'react-router-dom'
const Footer = () => {
return (
    <div>
        <div className="footer">
            <div className="container-in-footer">
                <div className="left">
                    <p>© 2023 TheMealDB</p>
                    <p>Proudly built in the UK </p>
                </div>
                <div className="middle">
                    <div className="img">
                        <Link to='/'>
                            <img src={logo2} alt="" />
                        </Link>
                    </div>
                    <div className="img">
                        <img src={logo1} alt="" />
                    </div>
                </div>
                <div className="right">
                    <p>About</p>
                    <p>Faq</p>
                    <p>Contact</p>
                </div>
            </div>

        </div>
    </div>
)
}

export default Footer