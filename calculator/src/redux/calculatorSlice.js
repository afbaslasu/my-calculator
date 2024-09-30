import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayValue: "0",
  prevValue: null,
  operator: null,
  formula: "",
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    inputNumber: (state, action) => {
      const number = action.payload;
      if (state.displayValue === "0" || state.operator === "=") {
        state.displayValue = number;
        state.formula = number !== "0" ? number : ""; // Prevent leading zeros
      } else {
        state.displayValue += number;
        state.formula += number;
      }
      state.operator = null; // Reset operator after a number input
    },
    inputOperator: (state, action) => {
      const operator = action.payload;
      if (state.operator && state.operator !== "=") {
        // Handle consecutive operators (replace the previous one)
        state.formula = state.formula.slice(0, -1) + operator;
      } else if (state.displayValue !== "0" && state.operator !== "=") {
        state.formula += operator;
      } else if (state.operator === "=") {
        // Start a new calculation with the previous result
        state.formula = state.displayValue + operator;
      }
      state.operator = operator;
      state.prevValue = state.displayValue;
      state.displayValue = operator;
    },
    inputDecimal: (state) => {
      if (!state.displayValue.includes(".") && state.operator !== "=") {
        state.displayValue += ".";
        state.formula += ".";
      }
    },
    clear: () => initialState, // Reset to initial state
    evaluate: (state) => {
      try {
        // Evaluate the expression (replace x with *)
        let expression = state.formula.replace(/x/g, "*");
        if (/[+\-*/]$/.test(expression)) {
          expression = expression.slice(0, -1); // Remove trailing operator
        }
        const result = eval(expression);
        state.displayValue = result.toString();
        state.formula += "=" + result;
        state.operator = "=";
        state.prevValue = result;
      } catch (error) {
        state.displayValue = "Error";
        state.formula = "Error";
        state.operator = null;
        state.prevValue = null;
      }
    },
  },
});

export const { inputNumber, inputOperator, inputDecimal, clear, evaluate } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
