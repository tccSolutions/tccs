import React, {useState} from "react";
import { Navbar } from "../../components/navbar/navbar.component";
import { ReviewsContainer } from "../../components/review-container/review-container.component";
import { ReviewForm } from "../../components/review-form/review-form.component";

export const Reviews = () => {

  const [displayForm, setDisplayForm] = useState(false);
  
  return (
    <div>
      <Navbar />
      <h1>Comments from our Customers</h1>
      <ReviewsContainer setDisplayForm={setDisplayForm}/>
      {displayForm ?<ReviewForm setDisplayForm={setDisplayForm}/>:<div></div>}
      
    </div>
  );
};
