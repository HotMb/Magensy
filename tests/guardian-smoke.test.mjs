import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('the exported home page has a heading and a contact link', async () => {
  const html = await readFile('out/index.html', 'utf8');
  assert.match(html, /<h1(?:\s|>)/i);
  assert.match(html, /Magensy/i);
  assert.match(html, /href=["']#contact["']/i);
});