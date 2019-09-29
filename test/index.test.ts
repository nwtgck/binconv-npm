import * as assert from 'power-assert';

import {mergeUint8Arrays} from '../src/mergeUint8Arrays';
import {blobToReadableStream} from '../src/blobToReadableStream';


describe('mergeUint8Arrays', () => {
  it('should merge empty array of Uint8Array', async () => {
    const arrays: Uint8Array[] = [];
    const actual: Uint8Array = mergeUint8Arrays(arrays);
    const expect = new Uint8Array([]);
    assert.deepStrictEqual(actual, expect);
  });

  it('should merge array of Uint8Array', async () => {
    const arrays: Uint8Array[] = [
      new Uint8Array([1, 2, 3]),
      new Uint8Array([4, 5, 6, 7]),
      new Uint8Array([8, 9]),
    ];
    const actual: Uint8Array = mergeUint8Arrays(arrays);
    const expect = new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ]);
    assert.deepStrictEqual(actual, expect);
  });
});

describe('blobToReadableStream', () => {
  it('should convert blob to ReadableStream', async () => {
    const blob = new Blob(["Lorem ipsum dolor sit amet, altera quidam in pro."]);
    const readableStream: ReadableStream<Uint8Array> = blobToReadableStream(blob);
    const reader = readableStream.getReader();
    const arrays: Uint8Array[] = [];
    while (true) {
      const {value, done} = await reader.read();
      if (done) break;
      arrays.push(value);
    }
    const array: Uint8Array = mergeUint8Arrays(arrays);
    const expect: Uint8Array = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]);
    assert.deepStrictEqual(array, expect);
  });
});
