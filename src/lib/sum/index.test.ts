import { sum } from '.';

describe('sum関数', () => {
  test('adds empty to equal 0', () => {
    expect(sum([])).toBe(0);
  });

  test('adds 1 to equal 1', () => {
    expect(sum([1])).toBe(1);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
  });

  test('adds 1 + 2 + 3 to equal 3', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum([1, 2])).toBe(3);
  });
});
