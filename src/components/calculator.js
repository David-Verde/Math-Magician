import React, { useState } from 'react';

import './calculator.css';
import CalcButton from './CalcButton';

import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorObj, setCalculatorObj] = useState({});

  const handleCalculate = (calcObj, text) => {
    setCalculatorObj(calculate(calcObj, text));
  };

  let display = 0;

  if (Object.keys(calculatorObj).length === 0 || (calculatorObj.total === null
    && calculatorObj.next === null
    && calculatorObj.operation === null)) {
    display = 0;
  } else {
    display = calculatorObj.next !== null ? calculatorObj.next : calculatorObj.total;
  }

  return (

    <div className="Calculator">
      <div className="Calculator-result">{display}</div>

      <CalcButton buttonName="AC" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="+/-" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="%" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="÷" onClick={handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="7" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="8" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="9" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="x" onClick={handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="4" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="5" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="6" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="-" onClick={handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="1" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="2" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="3" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="+" onClick={handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="0" onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="." onClick={handleCalculate} calcObj={calculatorObj} />
      <CalcButton buttonName="=" onClick={handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

    </div>
  );
}

export default Calculator;
