import { getDocs, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.utils";
import { Review } from "../review-component/review.component";
import { CustomButton } from "../../components/custom-button/custom-button.component";
import "./review-container.styles.scss";

export const ReviewsContainer = ({setDisplayForm}) => {
  const [custReviews, setReviews] = useState([]);
  const [loading, setLoading] = useState();

  const getReviews = async () => {
    try {
      const snapshot = await getDocs(collection(db, "reviews"));
      snapshot.forEach((doc) => {
        let review = {
          id: doc.id,
          ...doc.data()
        }
       custReviews.push(review);
      
      });
      setLoading(false);     
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getReviews();
  },[]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className='review-container'>
        <div className='reviews'>
        {custReviews.map((review) => (
        <Review
          key={review.id}
          name={review.name}
          comment={review.comment}
          date={review.date}
        />
      ))}
        </div>
      
      <CustomButton onClick={()=>setDisplayForm(true)}>Leave Comment</CustomButton>
    </div>
  );
};
