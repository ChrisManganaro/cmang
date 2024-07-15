type PadDirection = 'start' | 'end';

function pad(
  str: string,
  length: number,
  padString = ' ',
  direction: PadDirection = 'end'
): string {
  if (padString.length === 0) {
    throw new Error('Pad string cannot be empty');
  }

  if (direction === 'start') {
    return str.padStart(length, padString);
  } else if (direction === 'end') {
    return str.padEnd(length, padString);
  } else {
    throw new Error('Invalid direction, use "start" or "end"');
  }
}

export default pad;
