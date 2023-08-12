import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Word from './Word';
const Home = () => {
    const [item, setItem] = useState([])
    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`).then((res) => {
            setItem(res.data.categories)
            console.log(res.data.categories)
        })
    }, [])
    const [search, setSearch] = useState('');
    
    const handleSearch = () => {
        navigate('/searchresult', { state: { search } });
    }
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate('/categoryresult', { state: { category } });
    }
    return (
        <div>
            <div className="container">
                <div className="Home">
                    <h1>Welcome to TheMealDB</h1>
                    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.We also offer a free JSON API for anyone wanting to use it, with additional features for subscribers.</p>
                    <br />
                    <p>Click above button to upgrade API for $3 per month (cancel anytime)Currently 76 supporters</p>
                    <hr />
                    <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search'/>
                    <button onClick={handleSearch}>Search</button>
                    <hr />
                </div>
                <div className="meals">
                    <h3>Category</h3>
                    <div className="meals-block">
                        {
                            item.map((index) =>{
                                return(
                                    <>
                                    <div className="eat">
                                        <img src={index.strCategoryThumb} alt="" />
                                        <h3 onClick={() => handleClick(index.strCategory)}>{index.strCategory}</h3>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <Word/>
            </div>
        </div>
    )
}

export default Home