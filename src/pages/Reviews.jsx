import React, { useEffect, useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [recipeId, setRecipeId] = useState("");
  const [userId, setUserId] = useState(""); // Assuming the user ID will be fetched from the active session

  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new testimonial object
    const newTestimonial = {
      rating: parseFloat(rating),
      description,
      recipe_id: parseInt(recipeId),
      user_id: parseInt(userId),
    };

    // Send a POST request to the server
    fetch("http://localhost:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTestimonial),
    })
      .then((response) => response.json())
      .then((data) => {
        // Add the new testimonial to the reviews state
        setReviews([data, ...reviews]);
        // Reset the form fields
        setRating("");
        setDescription("");
        setRecipeId("");
        // Close the form
        setShowForm(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <section id="testimonials">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="testimonials-heading text-center">
              <span>Comments</span>
              <h1>Clients Say</h1>
            </div>
          </div>
        </div>

        {/* New Testimonial Form */}
        <div className="row">
          <div className="col-12">
            <div className="testimonial-form">
              <button
                className="btn btn-primary"
                onClick={() => setShowForm(!showForm)}
              >
                New Testimonial
              </button>
              {showForm && (
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="rating">Rating:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                      className="form-control"
                      id="description"
                      value={description}
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
                      value={recipeId}
                      onChange={(e) => setRecipeId(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="row">
          {reviews.map((review) => (
            <div className="col-md-6" key={review.id}>
              <div className="testimonial-box">
                <div className="box-top">
                  {/* User Profile Section */}
                  <div className="profile">
                    <div className="profile-image">
                      <img src={review.user.image} alt="Profile" />
                    </div>

                    <div className="name-user">
                      <p className="review-username">
                        <strong>User: </strong>{review.user.username}
                      </p>
                      <br />
                      <p className="review-recipe-title">
                        <strong>Recipe: </strong>{review.recipe.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Review Section */}
                <div className="reviews pb-4">
                  {/* Use star Icons to represent the rating */}
                 <strong className="text-dark " >Rating:  </strong> <span className="review-rating">{review.rating}</span>
                </div>

                <div className="review-description">
                  <p>{review.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
