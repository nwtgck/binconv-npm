# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## [Unreleased]

## [0.1.2] - 2020-01-18
### Added
- Add converter: `string` → `ArrayBuffer`
- Add converter: `Uint8Array` → hex `string`

## [0.1.1] - 2019-12-27
### Added
- Add converter: `ReadableStream` → `Blob`

## Changed
- Update dependencies

## 0.1.0 - 2019-09-29
### Added
- Add converter: `Blob` → `ArrayBuffer`
- Add converter: `Blob` → `ReadableStream`
- Add converter: `Blob` → `Uint8Array`
- Add converter: `ReadableStream` → `Uint8Array`
- Add converter: `string` → `Uint8Array`
- Add converter: `Uint8Array` → `ArrayBuffer`
- Add converter: `Uint8Array` → `Blob`
- Add converter: `Uint8Array` → `ReadableStream`
- Add converter: `Uint8Array` → `string`
- Add `mergeUint8Arrays()` to merge `Uint8Array` array

[Unreleased]: https://github.com/nwtgck/binconv-npm/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/nwtgck/binconv-npm/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/nwtgck/binconv-npm/compare/v0.1.0...v0.1.1
