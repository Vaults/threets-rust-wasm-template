// Webpack does not allow synchronous loading of WASM.
// We load our entry point asynchronously to be able to forget about this and handle further async problems.

// The downside being, that it is not possible to run unit tests of classes that have WASM-functions in their dependency graph. This is due to
// test fixtures not fully supporting ESNext yet and wasm-pack not supporting ES6. This template does not deliver a fix for this problem.
import("./index").then((module) => { 
   new module.Index().main();
});