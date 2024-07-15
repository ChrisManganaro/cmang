import pad from './pad';

describe('pad function', () => {
  it('should pad at the start with spaces by default', () => {
    expect(pad('test', 10)).toBe('test      ');
  });

  it('should pad at the end with spaces by default', () => {
    expect(pad('test', 10, ' ', 'end')).toBe('test      ');
  });

  it('should pad at the start with the specified character', () => {
    expect(pad('test', 10, '*', 'start')).toBe('******test');
  });

  it('should pad at the end with the specified character', () => {
    expect(pad('test', 10, '*', 'end')).toBe('test******');
  });

  it('should throw an error if pad string is empty', () => {
    expect(() => pad('test', 10, '', 'end')).toThrow(
      'Pad string cannot be empty'
    );
  });

  it('should throw an error if direction is invalid', () => {
    expect(() => pad('test', 10, '*', 'middle' as any)).toThrow(
      'Invalid direction, use "start" or "end"'
    );
  });

  it('should not pad if the length is less than or equal to the string length', () => {
    expect(pad('test', 4)).toBe('test');
    expect(pad('test', 3)).toBe('test');
  });

  it('should pad with multiple characters', () => {
    expect(pad('test', 12, '123', 'end')).toBe('test12312312');
    expect(pad('test', 12, '123', 'start')).toBe('12312312test');
  });
});
