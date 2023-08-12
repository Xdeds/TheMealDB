import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'
import Footer from './Footer'
const Letter = () => {
    const [letter, setLetter] = useState([])
    const { word } = useLocation().state;
    const [error, setError] = useState(null);

    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${word}`).then((res) => {
            if (res.data.meals) {
                setLetter(res.data.meals)
                console.log(res.data.meals)
            } else {
                setError('No meals found');
            }
        })
    }, [word])
    const navigate = useNavigate();

    const btnClick = (desc) => {
        navigate('/mealsdescription', { state: { desc } });
    }
return (
    <div>
        <Nav/>
        <div className="container">
            <h1 style={{textAlign:'center'}}>{error}</h1>
            <div className="parent-block">
        {
            letter.map((index) =>{
                return(
                    <>
                    <div className="card">
                        <div className="img-block">
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
)
}

export default Letter