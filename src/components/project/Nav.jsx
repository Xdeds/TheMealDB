import React, { useState } from 'react'
import logo from '../media/TheMealDB.png'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        navigate('/searchresult', { state: { search } });
    }
    return (
        <div>
            <div className="Nav">
                <div className="parent">
                    <div className="logo-svg">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <Link to='/'>
                        <button className='home'>Home</button>
                        </Link>
                        <button className='active'><Link to='/random'>Random Meals</Link></button>
                        <button className='active'>API</button>
                        <button className='active'>Forum</button>
                        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search'/>
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav