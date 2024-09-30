import React from "react";
import { useSelector } from "react-redux";
import Display from "./Display";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import ClearButton from "./ClearButton";
import DecimalButton from "./DecimalButton";
import EqualsButton from "./EqualsButton";
import "../styles/components/Calculator.scss";

const Calculator = () => {
  const displayValue = useSelector((state) => state.calculator.displayValue);
  const formula = useSelector((state) => state.calculator.formula);

  return (
    <div className="calculator-container">
      <div className="calculator container">
        <Display formula={formula} value={displayValue} />
        <div className="buttons">
          <ClearButton /> {/* No more Bootstrap grid classes */}
          <OperatorButton value="/" />
          <OperatorButton value="*" />
          <NumberButton value="7" />
          <NumberButton value="8" />
          <NumberButton value="9" />
          <OperatorButton value="-" />
          <NumberButton value="4" />
          <NumberButton value="5" />
          <NumberButton value="6" />
          <OperatorButton value="+" />
          <NumberButton value="1" />
          <NumberButton value="2" />
          <NumberButton value="3" />
          <DecimalButton />
          <EqualsButton />
          <NumberButton value="0" className="jumbo" />
        </div>
      </div>
      <h2 className="design-text">Design by Ismail Ibadehin</h2>
    </div>
  );
};

export default Calculator;
