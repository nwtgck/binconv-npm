# binconv
[![Build Status](https://travis-ci.com/nwtgck/binconv-npm.svg?branch=develop)](https://travis-ci.com/nwtgck/binconv-npm)

Converters for Blob, Uint8Array, ReadableStream, ArrayBuffer, string in JavaScript/TypeScript

## Installation

```bash
npm i -S github:nwtgck/binconv-npm#v0.1.1
```

## Converters

Here are avaiable converters.  
Naming rule: `A` → `B` should be `aToB()`.

| conversion                       | function                       |
|----------------------------------|--------------------------------|
| `Blob` → `ArrayBuffer`           | `blobToArrayBuffer()`          |
| `Blob` → `ReadableStream`        | `blobToReadableStream()`       |
| `Blob` → `Uint8Array`            | `blobToUint8Array()`           |
| `ReadableStream` → `Blob`        | `readableStreamToBlob()`       |
| `ReadableStream` → `Uint8Array`  | `readableStreamToUint8Array()` |
| `string` → `Uint8Array`          | `stringToUint8Array()`         |
| `string` → `ArrayBuffer`         | `stringArrayBuffer()`          |
| `Uint8Array` → `ArrayBuffer`     | `uint8ArrayToArrayBuffer()`    |
| `Uint8Array` → `Blob`            | `uint8ArrayToBlob()`           |
| `Uint8Array` → `ReadableStream`  | `uint8ArrayToReadableStream()` |
| `Uint8Array` → `string`          | `uint8ArrayToString()`         |


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
