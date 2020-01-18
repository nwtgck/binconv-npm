import * as assert from 'power-assert';

import {mergeUint8Arrays} from '../src/mergeUint8Arrays';
import {readableStreamToUint8Array} from '../src/readableStreamToUint8Array';
import {blobToReadableStream} from '../src/blobToReadableStream';
import {blobToArrayBuffer} from '../src/blobToArrayBuffer';
import {blobToUint8Array} from '../src/blobToUint8Array';
import {stringToUint8Array} from "../src/stringToUint8Array";
import {stringToArrayBuffer} from "../src/stringToArrayBuffer";
import readableStreamToBlob from "../src/readableStreamToBlob";


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

describe('readableStreamToUint8Array', () => {
  it('should convert ReadableStream to Uint8Array', async () => {
    const readableStream: ReadableStream<Uint8Array> = new ReadableStream({
      start(controller){
        controller.enqueue(new Uint8Array([1, 2, 3]));
        controller.enqueue(new Uint8Array([4, 5, 6, 7]));
        controller.enqueue(new Uint8Array([8, 9]));
        controller.close();
      }
    });
    const actual: Uint8Array = await readableStreamToUint8Array(readableStream);
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
    const array: Uint8Array = await readableStreamToUint8Array(readableStream);
    const expect: Uint8Array = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]);
    assert.deepStrictEqual(array, expect);
  });
});

describe('blobToArrayBuffer', () => {
  it('should convert blob to ArrayBuffer', async () => {
    const blob = new Blob(["Lorem ipsum dolor sit amet, altera quidam in pro."]);
    const actual: ArrayBuffer = await blobToArrayBuffer(blob);
    const expect: ArrayBuffer = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]).buffer;
    assert.deepStrictEqual(actual, expect);
  });
});

describe('blobToUint8Array', () => {
  it('should convert blob to Uint8Array', async () => {
    const blob = new Blob(["Lorem ipsum dolor sit amet, altera quidam in pro."]);
    const actual: Uint8Array = await blobToUint8Array(blob);
    const expect: Uint8Array = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]);
    assert.deepStrictEqual(actual, expect);
  });
});

describe('stringToUint8Array', () => {
  it('should convert string to Uint8Array', async () => {
    const string = "Lorem ipsum dolor sit amet, altera quidam in pro.";
    const actual: Uint8Array = stringToUint8Array(string);
    const expect: Uint8Array = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]);
    assert.deepStrictEqual(actual, expect);
  });
});

describe('stringToArrayBuffer', () => {
  it('should convert string to ArrayBuffer', async () => {
    const string = "Lorem ipsum dolor sit amet, altera quidam in pro.";
    const actual: ArrayBuffer = stringToArrayBuffer(string);
    const expect: ArrayBuffer = new Uint8Array([
      76,111,114,101,109,32,105,112,115,117,109,32,100,111,108,111,114,32,115,105,116,32,97,109,101,116,44,32,97,108,116,101,114,97,32,113,117,105,100,97,109,32,105,110,32,112,114,111,46
    ]).buffer;
    assert.deepStrictEqual(actual, expect);
  });
});

describe('readableStreamToBlob', () => {
  it('should convert ReadableStream to Blob', async () => {
    const readableStream: ReadableStream<Uint8Array> = new ReadableStream({
      start(controller){
        controller.enqueue(new Uint8Array([1, 2, 3]));
        controller.enqueue(new Uint8Array([4, 5, 6, 7]));
        controller.enqueue(new Uint8Array([8, 9]));
        controller.close();
      }
    });
    const actual: Blob = await readableStreamToBlob(readableStream);
    const expect = new Blob([new Uint8Array([
      1, 2, 3, 4, 5, 6, 7, 8, 9
    ])]);
    assert.deepStrictEqual(actual, expect);
  });
});
