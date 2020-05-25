# threets-rust-wasm-template

This is a template project for combining [Three.js](https://threejs.org/), [Rust-WASM](https://rustwasm.github.io/book/) and TypeScript.
This project is a combination of multiple techniques out in the field for Typescript-WASM integration.

## Setting up

You will need Node >10 and it may be necessary to install some cli-packages here and there. Also Rust >1.3 is needed.
Clone the project and run `npm install`.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.
Both the Rust package and TypeScript package will be built.

## Running unit tests

Run `ng test` to execute the unit tests via [Mocha](https://mochajs.org/) and `cargo`.

## Running integration tests

Run `npm run integration-test` to execute integration tests.

## Contributing
Please add issues/pull requests if things aren't working or if they're unclear.
That's the best way to contribute. Depending on the nature I could add documentation or fixes.

## Further help/

Unfortunately, it's not a very common workflow yet. I wish you the best. 