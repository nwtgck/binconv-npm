import {blobToArrayBuffer} from "./blobToArrayBuffer";

export function blobToUint8Array(blob: Blob): Promise<Uint8Array> {
  return blobToArrayBuffer(blob).then(buff => new Uint8Array(buff));
}
export default blobToUint8Array;
