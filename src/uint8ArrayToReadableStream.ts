export function uint8ArrayToReadableStream(array: Uint8Array): ReadableStream<Uint8Array> {
  return new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(array);
      controller.close();
    }
  });
}
export default uint8ArrayToReadableStream;
