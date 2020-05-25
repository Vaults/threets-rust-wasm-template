//! Integration test suite for rust-wasm
extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

extern crate rust_wasm;
use rust_wasm::get_color;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
pub fn test_get_color()  {
    assert_eq!(get_color(), "#F5D742".to_string())
} 