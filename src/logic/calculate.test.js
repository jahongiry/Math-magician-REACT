import calculate from './calculate';

describe('checking operation test', () => {
  it('Should be true', () => {
    const sampleObject = {
      total: 2,
      next: 3,
      operation: '+',
    };

    const calculateResult = calculate(sampleObject, '+');
    expect(calculateResult.total).toBe('5');
  });

  it('Should be empty', () => {
    const sampleObject = {
      total: 2,
      next: 3,
      operation: '+',
    };

    const emptyObject = {
      total: null,
      next: null,
      operation: null,
    };

    const calculateResult = calculate(sampleObject, 'AC');
    expect(calculateResult.total).toBe(emptyObject.total);
  });
});
