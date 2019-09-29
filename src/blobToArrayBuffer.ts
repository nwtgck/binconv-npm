export function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const arrayBuffer = fileReader.result as ArrayBuffer;
      resolve(arrayBuffer);
    };
    fileReader.onerror = reject;
    fileReader.readAsArrayBuffer(blob);
  });
}
export default blobToArrayBuffer;
