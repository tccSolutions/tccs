import React, {useState} from "react";
import { ReviewsContainer } from "../../components/review-container/review-container.component";
import { ReviewForm } from "../../components/review-form/review-form.component";

export const Reviews = () => {

  const [displayForm, setDisplayForm] = useState(false);
  
  return (
    <div>     
      <h1>Comments from our Customers</h1>
      <ReviewsContainer setDisplayForm={setDisplayForm}/>
      {displayForm ?<ReviewForm setDisplayForm={setDisplayForm}/>:<div></div>}
      
    </div>
  );
};
