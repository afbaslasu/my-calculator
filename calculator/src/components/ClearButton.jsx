import React from "react";
import { useDispatch } from "react-redux";
import { clear } from "../redux/calculatorSlice";
import "../styles/components/ClearButton.scss";

const ClearButton = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clear());
  };

  return (
    <button id="clear" onClick={handleClick} className="jumbo clear-btn">
      AC
    </button>
  );
};

export default ClearButton;
