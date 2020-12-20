const fs = require("fs");
const loader = require("@assemblyscript/loader");
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;


function operation(op, value1, value2) {
    console.log(`${op} operation ${value1} and ${value2} = ${wasmModule.exports[op](value1, value2)}`)
    console.log();
}

function operationAll(op, values){
    const {__retain, __newArray } = wasmModule.exports
    let arrayPointer = __retain(__newArray(wasmModule.exports.Int32Array_ID,values))
    let values_string = values.join(",");
    console.log(`${op} operation, values {${values_string}} = ${wasmModule.exports[op](arrayPointer)}`)
}

operation('add',5,10)
operation('subtract',5,10)
operation('divide',15,5)
operation('multiply',15,5)

operationAll('addAll',[2,3,4,5])
operationAll('subtractAll',[2,3,4,5])
operationAll('multiplyAll',[2,3,4,5])
operationAll('divideAll',[5,4,3,2].reverse())

