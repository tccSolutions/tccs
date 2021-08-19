import React from "react";
import "./custom-button.styles.scss";

export const CustomButton = ({
  children,  
  inverted,
  ...otherprops
}) => (
  <div>
    <button
      className={`${inverted ? "inverted" : ""}custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  </div>
);
