import React from "react";
import "../styles/components/Display.scss";

const Display = ({ formula, value }) => {
  return (
    <div className="display">
      <div className="formulaScreen" id="formula-display">
        {formula}
      </div>
      <div className="outputScreen" id="display">
        {value}
      </div>
    </div>
  );
};

export default Display;
