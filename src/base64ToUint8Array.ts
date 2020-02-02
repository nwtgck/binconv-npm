export function base64ToUint8Array(base64Str: string): Uint8Array {
  // (base: https://gist.github.com/borismus/1032746#gistcomment-1493026)
  const raw = atob(base64Str);
  return Uint8Array.from([].map.call(raw, (c: string) => {
    return c.charCodeAt(0);
  }));
}
export default base64ToUint8Array;
