const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;

function operation(op, value1, value2) {
    console.log(`${op} operation ${value1} and ${value2} = ${wasmModule.exports[op](value1, value2)}`)
    console.log();
}

operation('add',5,10)
operation('subtract',5,10)
operation('divide',15,5)
operation('multiply',15,5)




