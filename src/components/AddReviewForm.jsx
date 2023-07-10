import React, { useState } from 'react';

const AddReviewForm = ({setReviews, reviews}) => {
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const [recipe_id, setRecipeId] = useState('');
  const [user_id, setUserId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const reviewData = {
      description: description,
      rating: rating,
      recipe_id: recipe_id,
      user_id: user_id
    };

    fetch('https://group-5-back.onrender.com/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add the review');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Review added successfully:', data);
        setReviews([data,...reviews])
        // Optionally, perform any necessary actions after adding the recipe
      })
      .catch((error) => {
        console.error('Error occurred while adding the review:', error);
      });

    // Reset form fields
    setRating('');
    setDescription('');
    setRecipeId('');
    setUserId('');
  };

  return (
    <div className="row">
    <div className="col-12">
    <div className="testimonial-form">
      <h2>Add a Review </h2>

      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="rating">Rating:</label>
        <input
          className="form-control"
          required
          id='rating'
          type="number"
          placeholder="Enter Rating"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description:</label>
         <textarea
            className="form-control"
            id="description"
            value={description}
            placeholder='Describe your experience'
            onChange={(e) => setDescription(e.target.value)}
            required
        ></textarea>
        </div>
        <div className="form-group">
        <label htmlFor="recipeId">Recipe ID:</label>
        <input
            type="number"
            className="form-control"
            id="recipeId"
            placeholder='Enter Recipe Id'
            value={recipe_id}
            onChange={(e) => setRecipeId(e.target.value)}
            required
        />
        </div>
        <div className="form-group">
        <label htmlFor="recipeId">User ID:</label>
        <input
            type="number"
            className="form-control"
            id="recipeId"
            placeholder='Enter User Id'
            value={user_id}
            onChange={(e) => setUserId(e.target.value)}
            required
        />
        </div>
       <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                </div>
          </div>
          </div>
          
  );
};

export default AddReviewForm