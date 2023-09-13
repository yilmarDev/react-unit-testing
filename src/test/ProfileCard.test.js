import { titleCase } from '../components/ProfileCard';

describe('titleCase testing', () => {
  test('Must return a String', () => {
    const result = titleCase('Hello World');
    expect(typeof result).toBe('string');
  });

  test('Must return the transformed string', () => {
    expect(titleCase('hello world')).toBe('Hello World');
  });

  test('Must return an empty string if receive an empty string', () => {
    expect(titleCase('')).toBe('');
  });
});
