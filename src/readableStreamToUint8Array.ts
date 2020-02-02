import {mergeAllUint8Arrays} from "./mergeAllUint8Arrays";

export async function readableStreamToUint8Array(readableStream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
  const reader = readableStream.getReader();
  const arrays: Uint8Array[] = [];
  while (true) {
    const {value, done} = await reader.read();
    if (done) break;
    arrays.push(value);
  }
  return mergeAllUint8Arrays(arrays);
}
export default readableStreamToUint8Array;
