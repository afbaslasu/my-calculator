import React from "react";
import { useDispatch } from "react-redux";
import { inputNumber } from "../redux/calculatorSlice";
import "../styles/components/NumberButton.scss";

const NumberButton = ({ value, className = "" }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(inputNumber(value));
  };

  return (
    <button
      id={`number-${value}`}
      onClick={handleClick}
      className={`number-btn ${className}`}
    >
      {value}
    </button>
  );
};

export default NumberButton;
