import React, { useState } from "react";
import { CustomInput } from "../custom-input/custom-input.component";
import { CustomTextArea } from "../custom-text-area/custom-text-area.component";
import { CustomButton } from "../custom-button/custom-button.component";
import "./review-form.styles.scss";
import { addReview } from "../../firebase/firebase.utils";

export const ReviewForm = ({setDisplayForm}) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
     
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        return;
      case "comment":
        setComment(event.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit=(event)=>{
      event.preventDefault();
      addReview(name,comment);
      setComment("")
      setName("");
      setDisplayForm(false);
  }

  return (
    <div className="review-form" >
      <div>
        <h1>Please use the form below to leave a comment.</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <CustomInput
          name="name"
          type="name"
          value={name}
          handleChange={handleChange}
          placeholder='Name'
        />
       
        
        <CustomTextArea
          name="comment"
          type="text"
          value={comment}
          handleChange={handleChange}          
          rows="10"
          placeholder="Enter Comment"
          required
        />
        <div className='btn-container'>
          <CustomButton type='submit'>Submit</CustomButton>
          <CustomButton type='button' onClick={()=>setDisplayForm(false)} >Cancel</CustomButton>
        </div>
       
      </form>
    </div>
  );
};
