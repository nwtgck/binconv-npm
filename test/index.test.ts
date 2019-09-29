import * as assert from 'power-assert';

import {mergeUint8Arrays} from '../src/mergeUint8Arrays';

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
