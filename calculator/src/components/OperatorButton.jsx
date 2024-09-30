import React from "react";
import { useDispatch } from "react-redux";
import { inputOperator } from "../redux/calculatorSlice";
import "../styles/components/OperatorButton.scss";

const OperatorButton = ({ value }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(inputOperator(value));
  };

  return (
    <button
      id={`operator-${value.replace("*", "x")}`}
      onClick={handleClick}
      className="operator-btn"
    >
      {value}
    </button>
  );
};

export default OperatorButton;
