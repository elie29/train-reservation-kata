import { add } from '../src/demo';

describe('demo test', () => {
  it('should be truthy', () => {
    expect(true).toBeTruthy();
  });

  it('should add 2 integer', () => {
    expect(add(1, 2)).toBe(3);
  });
});
