export function mergeUint8Arrays(arrays: ReadonlyArray<Uint8Array>): Uint8Array {
  // Calculate total length
  const totalLength: number = arrays.reduce((sum, arr) => sum + arr.byteLength, 0);
  // Initialize Uint8Array
  const merged = new Uint8Array(totalLength);
  let index = 0;
  // Merge arrays
  for (const array of arrays) {
    merged.set(array, index);
    index += array.byteLength;
  }
  return merged;
}
export default mergeUint8Arrays;
