import React, { useEffect, useState } from "react";
import AddReviewForm from '../components/AddReviewForm'

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetch("https://group-5-back.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  const handlNewTestimonialClick = () => {
    setShowForm(!showForm)
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
                className="btn btn"
                onClick={handlNewTestimonialClick}
              >
                New Testimonial
              </button>
              {showForm && <AddReviewForm  reviews={reviews} setReviews={setReviews}/>}
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
                      <img className='profile-image-img' src={review.user.image} alt="Profile" />
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
