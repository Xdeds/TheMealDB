import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const SearchResult = () => {
    const { search } = useLocation().state;
    const [result, setResult] = useState([])
    const [error, setError] = useState(null);

    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`).then((res) => {
            if(res.data.meals) {
                setResult(res.data.meals)
                console.log(res.data.meals)
            }else{
                setError('No meals found');
            }
        })
    }, [search])
    const navigate = useNavigate();
    const btnClick = (desc) => {
        navigate('/mealsdescription', { state: { desc } });
    }
return (
    <div>
        <Nav/>
        <div className="container">
            <div className="meals">
            <h3>Latest Meals</h3>
                <h1>{error}</h1>
                        <div className="meals-block">
                            {
                                result.map((index) =>{
                                    return(
                                        <div className="eat" key={index.idMeal}>
                                            <img src={index.strMealThumb} alt="" />
                                            <h3 onClick={() => btnClick(index.idMeal)}>{index.strMeal}</h3>
                                        </div>
                                    );
                                })
                            }
                        </div>
                </div>
            </div>
        <Footer/>
    </div>
);
}

export default SearchResult;
