// WASM-modules are not alowed in initial chunks in Webpack. 
// This class ensures the main module is loaded asynchronously so we don't have to worry about it anymore.
import('./index').then(module => {
    module.main();
})
