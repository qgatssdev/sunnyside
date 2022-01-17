import React from 'react';
import './css/review.css';

function Reviews({ Name, body, jobTitle, profilePhoto }) {
  return (
    <div className="review-content">
      <img src={profilePhoto} alt="pf" className="image-reviews" />
      <p id="body">{body}</p>
      <h2>{Name}</h2>
      <p id="body2">{jobTitle}</p>
    </div>
  );
}

export default Reviews;
