# smallest-jpeg

[![npm version](https://img.shields.io/npm/v/smallest-jpeg.svg)](https://www.npmjs.com/package/smallest-jpeg)
[![Build Status](https://travis-ci.com/shinnn/smallest-jpeg.svg?branch=master)](https://travis-ci.com/shinnn/smallest-jpeg)

A `Buffer` of [the theoretically smallest JPEG](https://github.com/mathiasbynens/small/blob/master/jpeg.jpg)

```javascript
const smallestJpeg = require('smallest-jpeg');
//=> <Buffer ff d8 ff db 00 43 00 03 02 02 02 02 02 03 02 02 02 03 03 03 03 04 06 04 04 04 04 04 08 06 06 ...>

smallestJpeg.length; //=> 107
```

Suitable for test fixtures.

```javascript
const {width, height} = someJpegParserFunction(smallestJpeg);

console.assert(width === 1);
console.assert(height === 1);
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install smallest-jpeg
```

## API

```javascript
const smallestJpeg = require('smallest-jpeg');
```

### smallestJpeg

Type: [`Buffer`](https://nodejs.org/api/buffer.html#buffer_class_buffer)

## Related

* [smallest-png](https://github.com/shinnn/smallest-png) — A [PNG](https://tools.ietf.org/html/rfc2083) version

## License

[MIT No Attribution](./LICENSE) © 2019 Shinnosuke Watanabe
