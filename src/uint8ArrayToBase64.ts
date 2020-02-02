export function uint8ArrayToBase64(array: Uint8Array): string {
  // (from: https://stackoverflow.com/a/12713326/2885946)
  return btoa(String.fromCharCode.apply(null, array));
}
export default uint8ArrayToBase64;
