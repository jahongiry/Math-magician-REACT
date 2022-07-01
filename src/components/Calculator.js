import { React, useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, nextNum: 0 });

  const clickHandler = (e) => {
    const inputValue = e.target.value;
    const calculation = calculate(state, inputValue);
    setState(calculation);
  };

  const displayHandler = (e) => {
    setState({
      total: e.target.value,
    });
  };

  return (
    <div>
      <div className="container">
        <span className="display" onChange={displayHandler}>
          {state.next || state.total || 0}
        </span>
        <button type="submit" onClick={clickHandler} value="AC">
          AC
        </button>
        <button type="submit" onClick={clickHandler} value="+/-">
          +/-
        </button>
        <button type="submit" onClick={clickHandler} value="%">
          %
        </button>
        <button
          className="orange-cl"
          type="submit"
          onClick={clickHandler}
          value="÷"
        >
          ÷
        </button>
        <button type="submit" onClick={clickHandler} value="7">
          7
        </button>
        <button type="submit" onClick={clickHandler} value="8">
          8
        </button>
        <button type="submit" onClick={clickHandler} value="9">
          9
        </button>
        <button
          className="orange-cl"
          type="submit"
          onClick={clickHandler}
          value="x"
        >
          x
        </button>
        <button type="submit" onClick={clickHandler} value="4">
          4
        </button>
        <button type="submit" onClick={clickHandler} value="5">
          5
        </button>
        <button type="submit" onClick={clickHandler} value="6">
          6
        </button>
        <button
          className="orange-cl"
          type="submit"
          onClick={clickHandler}
          value="-"
        >
          -
        </button>
        <button type="submit" onClick={clickHandler} value="1">
          1
        </button>
        <button type="submit" onClick={clickHandler} value="2">
          2
        </button>
        <button type="submit" onClick={clickHandler} value="3">
          3
        </button>
        <button
          className="orange-cl"
          type="submit"
          onClick={clickHandler}
          value="+"
        >
          +
        </button>
        <button
          className="zero-button"
          type="submit"
          onClick={clickHandler}
          value="0"
        >
          0
        </button>
        <button type="submit" onClick={clickHandler} value=".">
          .
        </button>
        <button
          className="orange-cl"
          type="submit"
          onClick={clickHandler}
          value="="
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
