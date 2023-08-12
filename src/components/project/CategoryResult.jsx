import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Nav from './Nav';
import Footer from './Footer';
const CategoryResult = () => {
    const [select,setSelect] = useState([])
    const { category } = useLocation().state;
    console.log(category);
    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then((res) => {
            setSelect(res.data.meals)
            console.log(res.data.meals)
        })
    }, [])
    const navigate = useNavigate();

    const btnClick = (desc) => {
        navigate('/mealsdescription', { state: { desc } });
    }
    
return (
    <div>
        <Nav/>
        <div className="container">
            <div className="parent-block">
        {
            select.map((index) =>{
                return(
                    <>
                    <div className="card-result">
                        <div className="result-img">
                            <img src={index.strMealThumb} alt="" />
                        </div>
                            <h3 onClick={() => btnClick(index.idMeal)}>{index.strMeal}</h3>
                    </div>
                    </>
                )
            })
        }
            </div>
        </div>
        <Footer/>
    </div>
);
};

export default CategoryResult;
