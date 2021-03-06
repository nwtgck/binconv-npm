# binconv
[![npm](https://img.shields.io/npm/v/binconv)](https://www.npmjs.com/package/binconv) [![CircleCI](https://circleci.com/gh/nwtgck/binconv-npm.svg?style=shield)](https://circleci.com/gh/nwtgck/binconv-npm)

Binary converters for Blob, Uint8Array, ReadableStream, ArrayBuffer, string in JavaScript/TypeScript

## Installation

```bash
npm i -S binconv
```

## Converters

Here are avaiable converters.  
Naming rule: `A` → `B` should be `aToB()`.

| conversion                       | function                       |
|----------------------------------|--------------------------------|
| `Base64` → `Uint8Array`          | `base64ToUint8Array()`         |
| `Blob` → `ArrayBuffer`           | `blobToArrayBuffer()`          |
| `Blob` → `ReadableStream`        | `blobToReadableStream()`       |
| `Blob` → `Uint8Array`            | `blobToUint8Array()`           |
| `ReadableStream` → `Blob`        | `readableStreamToBlob()`       |
| `ReadableStream` → `Uint8Array`  | `readableStreamToUint8Array()` |
| `string` → `Uint8Array`          | `stringToUint8Array()`         |
| `string` → `ArrayBuffer`         | `stringArrayBuffer()`          |
| `Uint8Array` → `ArrayBuffer`     | `uint8ArrayToArrayBuffer()`    |
| `Uint8Array` → Base64            | `uint8ArrayToBase64()`         |
| `Uint8Array` → `Blob`            | `uint8ArrayToBlob()`           |
| `Uint8Array` → hex `string`      | `uint8ArrayToHexString()`      |
| `Uint8Array` → `ReadableStream`  | `uint8ArrayToReadableStream()` |
| `Uint8Array` → `string`          | `uint8ArrayToString()`         |

## Other binary utilities

```ts
function mergeUint8Array(a: Uint8Array, b: Uint8Array): Uint8Array;
function mergeAllUint8Arrays(arrays: ReadonlyArray<Uint8Array>): Uint8Array;
```


## Usage

```ts
import * as binconv from 'binconv';

const blob = new Blob(["this is a blob"]);
const readableStream = binconv.blobToReadableStream(blob);
```

## Usage (on-demand import)

You can import only specific conversion to reduce file size.
```ts
import {blobToReadableStream} from 'binconv/dist/src/blobToReadableStream';

const blob = new Blob(["this is a blob"]);
const readableStream = blobToReadableStream(blob);
```
