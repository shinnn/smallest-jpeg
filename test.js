'use strict';

const {get} = require('https');
const {once} = require('events');

const smallestJpeg = require('.');
const test = require('tape');

test('smallestJpeg()', async t => {
	const [response] = await once(get('https://raw.githubusercontent.com/mathiasbynens/small/master/jpeg.jpg'), 'response');
	const expected = [];
	let len = 0;

	for await (const chunk of response) {
		expected.push(chunk);
		len += chunk.length;
	}

	t.ok(
		smallestJpeg.equals(Buffer.concat(expected, len)),
		'should bes a Buffer of the theoretically smallest JPEG.'
	);

	t.end();
});
