import operate from './operate';

describe('checking operation test', () => {
  it('Should be true', () => {
    expect(true).toBe(true);
    const numOne = 2;
    const numTwo = 3;
    const operation = '+';
    const result = '5';
    const operateResult = operate(numOne, numTwo, operation);
    expect(operateResult).toBe(result);
  });
});
