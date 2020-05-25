extern crate rust_wasm;
use rust_wasm::get_color;

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn test_get_color() {
        assert_eq!(get_color(), "#F5D742".to_string())
    }

}