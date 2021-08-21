import { db } from "../../firebase/firebase.utils";
import { Review } from "../review-component/review.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import "./review-container.styles.scss";
import React, { useEffect, useState } from "react";

export const ReviewsContainer = ({ setDisplayForm }) => {
  const [custReviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = db.collection("reviews");
    try {
      const getReviews = () => {
        ref.onSnapshot((snapshot) => {
          const reviews = [];
          snapshot.forEach((doc) =>
            reviews.push({ id: doc.id, ...doc.data() })
          );
          setReviews(reviews);
          setLoading(false);
        });
      };
      getReviews();
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  return loading ? (
    <div>LOADING...</div>
  ) : (
    <div className="review-container">
      <div className="reviews">
        {custReviews.map((review) => (
          <Review
            key={review.id}
            name={review.name}
            comment={review.comment}
            date={review.date}
          />
        ))}
      </div>
      <CustomButton onClick={() => setDisplayForm(true)}>
        Leave Comment
      </CustomButton>
    </div>
  );
};
