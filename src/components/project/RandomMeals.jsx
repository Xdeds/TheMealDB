import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nav from './Nav'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
const RandomMeals = () => {
    const [meals,setMeals] = useState([])

    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`).then((res) => {
            setMeals(res.data.meals)
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
                        {
                            meals.map((index) => {
                                return(
                                    <>
                                        <div className="random">
                                            <div className="img">
                                                <img src={index.strMealThumb} alt="" />
                                            </div>
                                            <h3 onClick={() => btnClick(index.idMeal)}>{index.strMeal}</h3>
                                        </div>
                                    </>
                                )
                            })
                        }
            </div>
            <Footer/>
        </div>
    )
}

export default RandomMeals