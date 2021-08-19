import React from "react";
import "./greeting.styles.scss";

export const Greeting = () => (
  <div className="greeting">
    <h1 className="title">Tim's Custom Computer Solutions</h1>
    <div className='message-container'>
        <p className="message">
        Thank you for visiting TCCS.TECH. We offer a variety of services ranging
        from pc repair to web development. Please use the{" "}
        <a href='/contactus'> Contact Us</a> link if you would like a quote
        or have a question.
        </p>
    </div>
   
  </div>
);
