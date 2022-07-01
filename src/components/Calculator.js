import React from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: 0,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.displayHandler = this.displayHandler.bind(this);
  }

  clickHandler(e) {
    const inputValue = e.target.value;
    const calculation = calculate(this.state, inputValue);
    this.setState(calculation);
  }

  displayHandler(e) {
    this.setState({
      total: e.target.value,
    });
  }

  render() {
    const { total, next } = this.state;

    return (
      <div>
        <div className="container">
          <span className="display" onChange={this.displayHandler}>
            {next || total || 0}
          </span>
          <button type="submit" onClick={this.clickHandler} value="AC">
            AC
          </button>
          <button type="submit" onClick={this.clickHandler} value="+/-">
            +/-
          </button>
          <button type="submit" onClick={this.clickHandler} value="%">
            %
          </button>
          <button
            className="orange-cl"
            type="submit"
            onClick={this.clickHandler}
            value="÷"
          >
            ÷
          </button>
          <button type="submit" onClick={this.clickHandler} value="7">
            7
          </button>
          <button type="submit" onClick={this.clickHandler} value="8">
            8
          </button>
          <button type="submit" onClick={this.clickHandler} value="9">
            9
          </button>
          <button
            className="orange-cl"
            type="submit"
            onClick={this.clickHandler}
            value="x"
          >
            x
          </button>
          <button type="submit" onClick={this.clickHandler} value="4">
            4
          </button>
          <button type="submit" onClick={this.clickHandler} value="5">
            5
          </button>
          <button type="submit" onClick={this.clickHandler} value="6">
            6
          </button>
          <button
            className="orange-cl"
            type="submit"
            onClick={this.clickHandler}
            value="-"
          >
            -
          </button>
          <button type="submit" onClick={this.clickHandler} value="1">
            1
          </button>
          <button type="submit" onClick={this.clickHandler} value="2">
            2
          </button>
          <button type="submit" onClick={this.clickHandler} value="3">
            3
          </button>
          <button
            className="orange-cl"
            type="submit"
            onClick={this.lickHandler}
            value="+"
          >
            +
          </button>
          <button
            className="zero-button"
            type="submit"
            onClick={this.clickHandler}
            value="0"
          >
            0
          </button>
          <button type="submit" onClick={this.clickHandler} value=".">
            .
          </button>
          <button
            className="orange-cl"
            type="submit"
            onClick={this.clickHandler}
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
