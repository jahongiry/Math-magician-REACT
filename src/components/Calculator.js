import React, { Component } from 'react';
import './Calculator.css';
// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render = () => (
    <div>
      <div className="container">
        <span className="display">0</span>
        <button type="submit">AC</button>
        <button type="submit">+/-</button>
        <button type="submit">%</button>
        <button className="orange-cl" type="submit">
          /
        </button>
        <button type="submit">7</button>
        <button type="submit">8</button>
        <button type="submit">9</button>
        <button className="orange-cl" type="submit">
          x
        </button>
        <button type="submit">4</button>
        <button type="submit">5</button>
        <button type="submit">6</button>
        <button className="orange-cl" type="submit">
          -
        </button>
        <button type="submit">1</button>
        <button type="submit">2</button>
        <button type="submit">3</button>
        <button className="orange-cl" type="submit">
          +
        </button>
        <button className="zero-button" type="submit">
          0
        </button>
        <button type="submit">.</button>
        <button className="orange-cl" type="submit">
          =
        </button>
      </div>
    </div>
  );
}
