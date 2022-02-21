import {splitArray} from './utils';

describe('Utils', () => {
  test('Split even number array into 2', () => {
    const array = [1, 2, 3, 4];
    const result = splitArray(array, 2);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  test('Split odd number array into 2', () => {
    const array = [1, 2, 3, 4, 5];
    const result = splitArray(array, 2);
    expect(result).toEqual([[1, 2], [3, 4], [5]]);
  });
});
