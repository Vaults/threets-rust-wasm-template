import('../../target/pkg').then(rustWasm => {
    const init = () => {
        alert(rustWasm.hello_world());
    }
    init();
})