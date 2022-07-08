import calculate from '../logic/calculate';

let calcObj = {};

beforeEach(() => {
  calcObj = {};
});

describe('Calculates an ADDITION correctly', () => {
  test('adds 1 + 2 to equal 3', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '+');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(3);
  });

  test('adds 1.2 + 2.7 to equal 3.9', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '+');

    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(3.9);
  });
});

describe('Calculates a SUBTRACTION correctly', () => {
  test('subtracts 1 - 2 to equal -1', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '-');
    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-1);
  });

  test('subtracts 1.2 - 2.7 to equal -1.5', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '-');

    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(-1.5);
  });
});

describe('Calculates a MULTIPLICATION correctly', () => {
  test('multiplies 1.5 * 2 to equal 3', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '5');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(3);
  });

  test('multiplies 1.2 * 2.7 to equal 3.24', () => {
    calcObj = calculate(calcObj, '1');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, 'x');

    calcObj = calculate(calcObj, '2');
    calcObj = calculate(calcObj, '.');
    calcObj = calculate(calcObj, '7');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(3.24);
  });
});

describe('Calculates a DIVISION correctly', () => {
  test('divides 3 / 2 to equal 1.5', () => {
    calcObj = calculate(calcObj, '3');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '2');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).toBe(1.5);
  });

  test('divides 0 * 0 to NOT equal 0', () => {
    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '÷');

    calcObj = calculate(calcObj, '0');

    calcObj = calculate(calcObj, '=');

    expect(Number(calcObj.total)).not.toBe(0);
  });
});
