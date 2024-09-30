import React from "react";
import { useDispatch } from "react-redux";
import { inputDecimal } from "../redux/calculatorSlice";
import "../styles/components/DecimalButton.scss";

const DecimalButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(inputDecimal());
  };

  return (
    <button id="decimal" onClick={handleClick} className="decimal-btn">
      .
    </button>
  );
};

export default DecimalButton;
