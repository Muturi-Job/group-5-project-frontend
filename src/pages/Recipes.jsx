import React from "react";
import { useEffect, useState } from "react"
import "./Recipes.css"
import { useNavigate} from "react-router-dom"
import AddRecipeForm from "./AddRecipeForm";


function Recipes () {

    const [recipes, setRecipes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://group-5-back.onrender.com/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        
    }
    , [])


    return (
        <div className='recipe'>
            <div>
                <h1>RECIPES 🥘</h1>
            </div>
            
            <AddRecipeForm/>

            <div className="search-bar">
                <input type="text" className="search-input" placeholder='input value'></input>
                <button className="search-button" >SEARCH</button>
            </div>

            <div className="recipe-container">
                {recipes.map(recipe => (
                    <div className="recipe-box" key={recipe.id}>
                        <span>{recipe.title}</span>
                        <img src={recipe.image_url} alt={recipe.title} className="recipe-img"/>
                        
                        <button className="button" onClick={() => navigate(`/recipes/${recipe.id}`)}>VIEW</button>

                        
                    </div>
                ))}

            </div>

        </div>
    );
}
export default Recipes;
