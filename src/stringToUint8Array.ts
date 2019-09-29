// (from: https://gist.github.com/kawanet/352a2ed1d1656816b2bc)
export function stringToUint8Array(str: string): Uint8Array {
  const numbers: number[] = [].map.call(str, (c: string) => {
    return c.charCodeAt(0);
  }) as number[]; // TODO: Not cast
  return new Uint8Array(numbers);
}
export default stringToUint8Array;
