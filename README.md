# smallest-jpeg

[![NPM version](https://badge.fury.io/js/smallest-jpeg.svg)](https://www.npmjs.org/package/smallest-jpeg)
[![Build Status](https://travis-ci.org/shinnn/node-smallest-jpeg.svg?branch=master)](https://travis-ci.org/shinnn/node-smallest-jpeg)
[![Build status](https://ci.appveyor.com/api/projects/status/9v34s8a298q9hipi)](https://ci.appveyor.com/project/ShinnosukeWatanabe/node-smallest-jpeg)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/node-smallest-jpeg.svg)](https://coveralls.io/r/shinnn/node-smallest-jpeg)
[![devDependency Status](https://david-dm.org/shinnn/node-smallest-jpeg/dev-status.svg)](https://david-dm.org/shinnn/smallest-jpeg#info=devDependencies)

A [Node](http://nodejs.org/) module to create a buffer of [theoretically smallest JPEG](https://github.com/mathiasbynens/small/blob/master/jpeg.jpg)

```javascript
var smallestJpeg = require('smallest-jpeg');

smallestJpeg(); //=> <Buffer ff d8 ff e0 00 10 4a 46 49 ...>
smallestJpeg().length; //=> 125
```

It is useful to test image-related modules.

## Installation

[Install with npm](https://www.npmjs.org/doc/cli/npm-install.html).

```
npm install smallest-jpeg
```

## API

```javascript
var smallestJpeg = require('smallest-jpeg');
```

### smallestJpeg()

Return: [`Buffer`](http://nodejs.org/api/buffer.html#buffer_buffer)

## License

Copyright (c) 2014 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
