# golang-wasm-runtime

A TypeScript implementation of Go's WebAssembly runtime. This package provides a TypeScript version of the Go WebAssembly runtime for browser environments.

⚠️ **Important Note**: This package is designed to work exclusively in browser environments and does not support Node.js environments.

## Installation

```bash
npm install golang-wasm-runtime
# or
yarn add golang-wasm-runtime
```

## Usage

```typescript
import { Go } from 'golang-wasm-runtime';

async function runGoWasm() {
  const go = new Go();
  
  // Load your WebAssembly module
  const wasmBytes = await fetch('your-go-program.wasm').then(response =>
    response.arrayBuffer()
  );
  
  // Instantiate the WebAssembly module
  const wasmModule = await WebAssembly.instantiate(wasmBytes, go.importObject);
  
  // Run the Go WASM instance
  await go.run(wasmModule.instance);
}

runGoWasm().catch(console.error);
```

## Features

- Full TypeScript support with type definitions
- Compatible with Go's WebAssembly implementation
- Supports both CommonJS and ES Modules
- Provides all necessary runtime functions for Go WASM modules

## API

### Class: Go

The main class that provides the Go WebAssembly runtime environment.

#### Constructor

```typescript
const go = new Go()
```

#### Properties

- `importObject`: WebAssembly imports object containing all necessary functions for Go WASM modules
- `argv`: Command line arguments array (default: ['js'])
- `env`: Environment variables object
- `exit`: Function called when the Go program exits

#### Methods

- `async run(instance: WebAssembly.Instance): Promise<void>`
  Runs the provided WebAssembly instance

## License

MIT