import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="btn-container">
        <button type="button" className="top">AC</button>
        <button type="button" className="top">+/-</button>
        <button type="button" className="top">%</button>
        <button type="button" className="right-btn">/</button>

        <button type="button" className="top">7</button>
        <button type="button" className="top">8</button>
        <button type="button" className="top">9</button>
        <button type="button" className="right-btn">X</button>

        <button type="button" className="top">4</button>
        <button type="button" className="top">5</button>
        <button type="button" className="top">6</button>
        <button type="button" className="right-btn">-</button>

        <button type="button" className="top">1</button>
        <button type="button" className="top">2</button>
        <button type="button" className="top">3</button>
        <button type="button" className="right-btn">+</button>

        <button type="button" className="top zero-btn">0</button>
        <button type="button" className="top">.</button>
        <button type="button" className="right-btn">=</button>
      </div>
    );
  }
}
export default Calculator;
