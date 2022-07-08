import operate from '../logic/operate';

describe('ADD Testing', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(Number(operate(1, 2, '+'))).toBe(3);
  });

  test('adds 1 + 3 to NOT equal 5', () => {
    expect(Number(operate(1, 3, '+'))).not.toBe(5);
  });
});

describe('SUBTRACT Testing', () => {
  test('subtracts 5 - 2 to equal 3', () => {
    expect(Number(operate(5, 2, '-'))).toBe(3);
  });

  test('subtracts 8 - 2 to NOT equal 3', () => {
    expect(Number(operate(5, 2, '-'))).not.toBe(5);
  });
});

describe('MULTIPLY Testing', () => {
  test('multiplies 5 * 2 to equal 10', () => {
    expect(Number(operate(5, 2, 'x'))).toBe(10);
  });

  test('multiplies 6 * 6 to NOT equal 35', () => {
    expect(Number(operate(6, 6, 'x'))).not.toBe(35);
  });
});

describe('DIVIDE Testing', () => {
  test('divide 6 / 2 to equal 3', () => {
    expect(Number(operate(6, 2, '÷'))).toBe(3);
  });

  test('divide 8 / 2 to NOT equal 5', () => {
    expect(Number(operate(8, 2, '÷'))).not.toBe(5);
  });
});
