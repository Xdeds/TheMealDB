import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const Ingerdient = () => {
    const [filter, setFilter] = useState([])
    const { ingerdient } = useLocation().state;
    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingerdient}`).then((res) => {
            setFilter(res.data.meals)
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
            filter.map((index) =>{
                return(
                    <>
                    <div className="card-ing">
                        <div className="ing-img">
                            <img src={index.strMealThumb} alt="" />
                        </div>
                        <h3 onClick={() => btnClick(index.idMeal)} >{index.strMeal}</h3>
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

export default Ingerdient