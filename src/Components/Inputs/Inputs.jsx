import React from "react";
import arrow from "../../Assets/Stroke-1.svg";
import bk from "../../Assets/bk.svg";
import "./Inputs.scss";

export const Inputs = ({ onChange, title, placeholder }) => {
    return (
        <div className="input">
            <label>{title}</label>
            <input onChange={onChange} placeholder={placeholder} />
        </div>
    );
};

// button component with props and arrow icon

export const Button = ({ title, onClick, className }) => {
    return (
        <button className="btn" onClick={onClick}>
            {title} <img src={arrow} alt="" />{" "}
        </button>
    );
};
export const Button2 = ({ title, onClick, className }) => {
    return (
        <button onClick={onClick} className="btn bg-bk">
            {title}
            <img src={bk} alt="" />{" "}
        </button>
    );
};
