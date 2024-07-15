# @cmang/pad

## Overview

The `@cmang/pad` package provides a utility function `pad` to pad a string to a specified length with a given pad string. It supports padding either at the start or at the end of the string. The package includes robust error handling and a comprehensive set of tests to ensure reliability.

## Installation

You can install the package via npm or yarn:

```bash
npm install @cmang/pad
```

or

```bash
yarn add @cmang/pad
```

## Usage

Import the `pad` function and use it to pad your strings as needed. Below are some usage examples:

```javascript
import { pad } from '@cmang/pad';

// Pad at the end with spaces by default
console.log(pad('test', 10)); // Output: 'test      '

// Pad at the start with spaces
console.log(pad('test', 10, ' ', 'start')); // Output: '      test'

// Pad at the start with a specified character
console.log(pad('test', 10, '*', 'start')); // Output: '******test'

// Pad at the end with a specified character
console.log(pad('test', 10, '*', 'end')); // Output: 'test******'

// Pad with multiple characters
console.log(pad('test', 12, '123', 'end')); // Output: 'test12312312'
console.log(pad('test', 12, '123', 'start')); // Output: '12312312test'
```

## API

### `pad(str: string, length: number, padString: string = ' ', direction: 'start' | 'end' = 'end'): string`

#### Parameters

- **str**: The input string to be padded.
- **length**: The desired length of the resulting string after padding.
- **padString**: The string to pad with. Defaults to a single space if not provided.
- **direction**: The direction to pad the string. Can be either `'start'` or `'end'`. Defaults to `'end'`.

#### Returns

- The padded string.

#### Errors

- Throws an error if the `padString` is empty.
- Throws an error if the `direction` is not `'start'` or `'end'`.

## Error Handling

The `pad` function includes error handling for the following scenarios:

1. If the `padString` is empty, an error is thrown: `'Pad string cannot be empty'`.
2. If an invalid `direction` is provided, an error is thrown: `'Invalid direction, use "start" or "end"'`.

## Tests

The package includes a comprehensive set of tests to ensure the function works as expected. The tests are written using Jest and cover various scenarios, including:

- Default padding at the end with spaces.
- Padding at the start with spaces.
- Padding at the start and end with specified characters.
- Error handling for empty pad strings and invalid directions.
- No padding if the specified length is less than or equal to the original string length.
- Padding with multiple characters.

To run the tests, use the following command:

```bash
npm test
```

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.