'use strict';

const {get} = require('https');

const smallestJpeg = require('.');
const test = require('tape');

test('smallestJpeg()', async t => {
	t.plan(1);

	get('https://raw.githubusercontent.com/mathiasbynens/small/master/jpeg.jpg', async response => {
		const expected = [];
		let len = 0;

		for await (const chunk of response) {
			expected.push(chunk);
			len += chunk.length;
		}

		t.ok(
			smallestJpeg.equals(Buffer.concat(expected, len)),
			'should create a Buffer of the theoretically smallest JPEG.'
		);
	});
});
