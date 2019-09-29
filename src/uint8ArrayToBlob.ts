export function uint8ArrayToBlob(array: Uint8Array, type?: string): Blob {
  return new Blob([array], {type});
}
export default uint8ArrayToBlob;
