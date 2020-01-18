import {stringToUint8Array} from "./stringToUint8Array";

export function stringToArrayBuffer(str: string): ArrayBuffer {
  return stringToUint8Array(str).buffer;
}
export default stringToArrayBuffer;
