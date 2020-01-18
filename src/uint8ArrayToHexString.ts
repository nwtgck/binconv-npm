export function uint8ArrayToHexString(array: Uint8Array): string {
  // (from: https://stackoverflow.com/a/40031979)
  return [].map.call(array, (x: number) => ('00' + x.toString(16)).slice(-2)).join('');
}
export default uint8ArrayToHexString;
