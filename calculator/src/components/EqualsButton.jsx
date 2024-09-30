import React from "react";
import { useDispatch } from "react-redux";
import { evaluate } from "../redux/calculatorSlice";
import "../styles/components/EqualsButton.scss";

const EqualsButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(evaluate());
  };

  return (
    <button id="equals" onClick={handleClick} className="jumbo equals-btn">
      =
    </button>
  );
};

export default EqualsButton;
