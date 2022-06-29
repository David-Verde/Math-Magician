import React, { Component } from 'react';

import './calculator.css';
import CalcButton from './CalcButton';

import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calculatorObj: {},
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj, text) {
    this.setState({ calculatorObj: calculate(calcObj, text) });
  }

  render() {
    const { calculatorObj } = this.state;

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

        <CalcButton buttonName="AC" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="+/-" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="%" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="÷" onClick={this.handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

        <CalcButton buttonName="7" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="8" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="9" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="x" onClick={this.handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

        <CalcButton buttonName="4" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="5" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="6" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="-" onClick={this.handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

        <CalcButton buttonName="1" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="2" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="3" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="+" onClick={this.handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

        <CalcButton buttonName="0" onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="." onClick={this.handleCalculate} calcObj={calculatorObj} />
        <CalcButton buttonName="=" onClick={this.handleCalculate} calcObj={calculatorObj} classButton="orangeButton" />

      </div>
    );
  }
}

export default Calculator;
