import React, { useState } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { CustomInput } from "../custom-input/custom-input.component";
import { CustomTextArea } from "../custom-text-area/custom-text-area.component";
import emailjs from 'emailjs-com';
import "./contact-form.styles.scss";

export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "fname":
        setFirstName(event.target.value);
        return;
      case "lname":
        setLastName(event.target.value);
        return;
      case "email":
        setEmail(event.target.value);
        return;
      case "comment":
        setComment(event.target.value);
        return;
      default:
        return;
    }
  };

  const handleSubmit = async(event) => {   
    event.preventDefault();
   try{
      emailjs.send('contact_service', 'contact_form',{
      from_name: `${firstName} ${lastName}`,
      message: comment,
      email:email
    }, 'user_RMkv4Xk720JMhtey0EJvM');    
      setFirstName("");
      setLastName("");
      setComment("")
      setEmail("");
      console.log("Message Sent Successfully")

   }catch(err){console.log(err)} 
   
  };

  return (
    <div className="contact-form-container">

      <div>
        <h1>Please use the form below to contact us.</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <CustomInput
          name="fname"
          type="name"
          value={firstName}
          handleChange={handleChange}
          label="First Name"
        />
        <CustomInput
          name="lname"
          type="name"
          value={lastName}
          handleChange={handleChange}
          label="Last Name"
        />
        <CustomInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <CustomTextArea
          name="comment"
          type="text"
          value={comment}
          handleChange={handleChange}
          label="Enter message"
          rows="15"
          required
        />
        <div className='btn-container'>
          <CustomButton type='submit'>Submit</CustomButton>
        </div>
       
      </form>
    </div>
  );
};
