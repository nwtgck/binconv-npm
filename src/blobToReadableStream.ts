// (base: https://github.com/mozilla/send/blob/90f6a07d4af4863165a827895a6d2a01ab948bde/app/streams.js#L43-L73)

class BlobStreamController implements UnderlyingSource<Uint8Array>{
  index: number = 0;
  chunkSize: Readonly<number>;

  constructor(readonly blob: Blob, size?: number) {
    this.chunkSize = size || 1024 * 64;
  }

  pull(controller: ReadableStreamDefaultController<Uint8Array>): Promise<void> {
    return new Promise((resolve, reject) => {
      const bytesLeft = this.blob.size - this.index;
      if (bytesLeft <= 0) {
        controller.close();
        return resolve();
      }
      const size = Math.min(this.chunkSize, bytesLeft);
      const slice = this.blob.slice(this.index, this.index + size);
      const reader = new FileReader();
      reader.onload = () => {
        controller.enqueue(new Uint8Array(reader.result as ArrayBuffer));
        resolve();
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(slice);
      this.index += size;
    });
  }
}

export function blobToReadableStream(blob: Blob, size?: number) {
  return new ReadableStream(new BlobStreamController(blob, size));
}
export default blobToReadableStream;
