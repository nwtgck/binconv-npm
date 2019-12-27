export async function readableStreamToBlob(readableStream: ReadableStream<Uint8Array>): Promise<Blob> {
  return new Response(readableStream).blob();
}
export default readableStreamToBlob;
