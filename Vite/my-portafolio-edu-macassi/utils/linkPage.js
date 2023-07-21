import React from "react";
import "./Button.css";

const Button = ({ icon, text }) => ( <button className="my-btn"> <img src={icon} alt={${text} icon} /> <h4>{text}</h4> </button> );

export default Button;