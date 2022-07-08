import React, { useState } from 'react';

import './Calculator.css';
import CalcButton from './CalcButton';

import calculate from '../logic/calculate';

function Calculator() {
  const [CalculatorObj, setCalculatorObj] = useState({});

  const handleCalculate = (calcObj, text) => {
    setCalculatorObj(calculate(calcObj, text));
  };

  let display = 0;

  if (Object.keys(CalculatorObj).length === 0 || (CalculatorObj.total === null
    && CalculatorObj.next === null
    && CalculatorObj.operation === null)) {
    display = 0;
  } else {
    display = CalculatorObj.next !== null ? CalculatorObj.next : CalculatorObj.total;
  }

  return (

    <div className="Calculator">
      <div className="Calculator-result">{display}</div>

      <CalcButton buttonName="AC" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="+/-" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="%" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="÷" onClick={handleCalculate} calcObj={CalculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="7" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="8" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="9" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="x" onClick={handleCalculate} calcObj={CalculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="4" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="5" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="6" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="-" onClick={handleCalculate} calcObj={CalculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="1" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="2" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="3" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="+" onClick={handleCalculate} calcObj={CalculatorObj} classButton="orangeButton" />

      <CalcButton buttonName="0" onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="." onClick={handleCalculate} calcObj={CalculatorObj} />
      <CalcButton buttonName="=" onClick={handleCalculate} calcObj={CalculatorObj} classButton="orangeButton" />

    </div>
  );
}

export default Calculator;
