import React, { useEffect, useState } from "react";
import "./Recipes.css";
import { useNavigate } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://group-5-back.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDelete = (recipeId) => {
    fetch(`https://group-5-back.onrender.com/recipes/${recipeId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
        }
      });
  };

  return (
    <div className="recipe">
      <div>
        <h1>RECIPES 🥘</h1>
      </div>

      <AddRecipeForm recipes={recipes} setRecipes={setRecipes} />
{/* 
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="input value" />
        <button className="search-button">SEARCH</button>
      </div> */}

      <div className="recipe-container">
        {recipes.map((recipe) => (
          <div className="recipe-box" key={recipe.id}>
            <span>{recipe.title}</span>
            <img src={recipe.image_url} alt={recipe.title} className="recipe-img" />

            <button className="button" onClick={() => navigate(`/recipes/${recipe.id}`)}>
              VIEW
            </button>
            <button className="delete-button" onClick={() => handleDelete(recipe.id)}>
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
