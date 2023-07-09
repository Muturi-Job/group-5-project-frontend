import React from "react";
import { useEffect, useState } from "react"
import "./Recipe.css"
import { useParams } from "react-router-dom"


function Recipe () {
    const [recipe, setRecipe] = useState({})

    const params = useParams()
  
    useEffect(() => {
      fetch(`http://localhost:3000/recipes/${params.id}}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
  
      }
    , [])

    return (
      <div className="recipe-details-container">
        <div className="recipe-details-wrapper">
          <div className="recipe-image-detail">
              <img src={recipe.image_url} alt="" />
          </div>
          <div className="details">
              <h3>Title: {recipe.title}</h3>
              <p>Description: {recipe.description}</p>
              <p>Procedure: {recipe.procedure}</p>
          </div>
        </div>
      </div>
    )


}
export default Recipe;