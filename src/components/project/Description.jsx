import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
const Description = () => {
    const [popular,setPopular] = useState([])
    const { desc } = useLocation().state;

    useEffect(() =>{
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${desc}`).then((res) => {
            setPopular(res.data.meals)
        })
    }, [])
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate('/categoryresult', { state: { category } });
    }
    const btnclick = (ingerdient) => {
        navigate('/ingerdient', { state: { ingerdient } });
    }
    return (
        <div>
            <Nav/>
            <div className="container">
            {
                popular.map((item) =>{
                    return(
                        <>
                        <div className="box">
                            <div className="block">
                                <h2>{item.strMeal}</h2>
                                <div className="image">
                                    <img src={item.strMealThumb} alt="" />
                                </div>
                                <h3 onClick={() => handleClick(item.strCategory)}>{item.strCategory}</h3>
                            </div>
                            <div className="ing">
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient1)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient1}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure1}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient2)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient2}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure2}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient3)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient3}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure3}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient4)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient4}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure4}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient5)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient5}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure5}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient6)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient6}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure6}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient7)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient7}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure7}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient8)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient8}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure8}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient9)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient9}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure9}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient10)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient10}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure10}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient11)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient11}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure11}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient12)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient12}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure12}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient13)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient13}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure13}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient14)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient14}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure14}</h3>
                                </div>
                                <div className="block_1">
                                    <div className="image">
                                        <img onClick={() => btnclick(item.strIngredient15)} src={`https://www.themealdb.com/images/ingredients/${item.strIngredient15}.png`} alt="" />
                                    </div>
                                    <h3>{item.strMeasure15}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="instr">
                            <h2>Instructions</h2>
                            <p>
                                {item.strInstructions}
                            </p>
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

export default Description